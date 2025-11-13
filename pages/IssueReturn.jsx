import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function IssueReturn({ books, members, issueBook, issued, returnBook }) {
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [dueDate, setDueDate] = useState("");

  function onIssue(e) {
    e.preventDefault();
    if (!selectedBook || !selectedMember || !dueDate) return;
    const bookObj = books.find((b) => b.id === selectedBook);
    const memberObj = members.find((m) => m.id === selectedMember);
    const record = {
      id: uuidv4(),
      bookId: bookObj.id,
      bookTitle: bookObj.title,
      memberId: memberObj.id,
      memberName: memberObj.name,
      dueDate
    };
    issueBook(record);
    // reset
    setSelectedBook("");
    setSelectedMember("");
    setDueDate("");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Issue / Return</h1>

      <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <form className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end" onSubmit={onIssue}>
          <div>
            <label className="text-xs">Select Book</label>
            <select className="w-full mt-1 p-2 border rounded" value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
              <option value="">-- choose book --</option>
              {books.map((b) => <option value={b.id} key={b.id}>{b.title} ({b.copies} copies)</option>)}
            </select>
          </div>

          <div>
            <label className="text-xs">Select Member</label>
            <select className="w-full mt-1 p-2 border rounded" value={selectedMember} onChange={(e) => setSelectedMember(e.target.value)}>
              <option value="">-- choose member --</option>
              {members.map((m) => <option value={m.id} key={m.id}>{m.name}</option>)}
            </select>
          </div>

          <div>
            <label className="text-xs">Due Date</label>
            <input type="date" className="w-full mt-1 p-2 border rounded" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>

          <div className="sm:col-span-3 flex justify-end">
            <button className="px-4 py-2 bg-accent text-white rounded">Issue Book</button>
          </div>
        </form>

        <div>
          <h2 className="font-semibold mb-2">Issued Books</h2>
          <div className="space-y-2">
            {issued.length === 0 && <div className="text-sm text-slate-500">No issued books</div>}
            {issued.map((rec) => (
              <div key={rec.id} className="flex items-center justify-between bg-slate-50 p-3 rounded">
                <div>
                  <div className="font-medium">{rec.bookTitle}</div>
                  <div className="text-xs text-slate-500">{rec.memberName} — due {rec.dueDate}</div>
                </div>
                <div>
                  <button onClick={() => returnBook(rec.id)} className="px-3 py-1 rounded bg-green-50 text-green-600">Return</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
