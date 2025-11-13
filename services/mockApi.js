import { booksSeed, membersSeed, transactionsSeed } from '../data/mockData';

const KEY = 'library_store_v1';

function load() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    const seed = { books: booksSeed, members: membersSeed, transactions: transactionsSeed };
    localStorage.setItem(KEY, JSON.stringify(seed));
    return structuredClone(seed);
  }
  return JSON.parse(raw);
}
function save(store) {
  localStorage.setItem(KEY, JSON.stringify(store));
}

export const api = {
  // Books
  getBooks: async () => load().books,
  addBook: async (book) => {
    const s = load(); s.books.unshift(book); save(s); return book;
  },
  updateBook: async (id, patch) => {
    const s = load(); s.books = s.books.map(b => b.id === id ? { ...b, ...patch } : b); save(s); return s.books.find(b => b.id === id);
  },
  deleteBook: async (id) => {
    const s = load(); s.books = s.books.filter(b => b.id !== id); save(s); return true;
  },

  // Members
  getMembers: async () => load().members,
  addMember: async (m) => { const s = load(); s.members.unshift(m); save(s); return m; },
  updateMember: async (id, patch) => { const s = load(); s.members = s.members.map(m => m.id === id ? { ...m, ...patch } : m); save(s); return s.members.find(m => m.id === id); },
  deleteMember: async (id) => { const s = load(); s.members = s.members.filter(m => m.id !== id); save(s); return true; },

  // Transactions
  getTransactions: async () => load().transactions,
  issueBook: async (tx) => {
    const s = load();
    s.transactions.unshift(tx);
    s.books = s.books.map(b => b.id === tx.bookId ? { ...b, copies: Math.max(0, (b.copies || 0) - 1), issued: (b.issued || 0) + 1 } : b);
    save(s);
    return tx;
  },
  returnBook: async (txId) => {
    const s = load();
    const tx = s.transactions.find(t => t.id === txId);
    if (tx && !tx.returned) {
      tx.returned = true; tx.returnedOn = new Date().toISOString();
      s.books = s.books.map(b => b.id === tx.bookId ? { ...b, copies: (b.copies || 0) + 1, issued: Math.max(0, (b.issued || 0) - 1) } : b);
      save(s);
    }
    return tx;
  }
};
