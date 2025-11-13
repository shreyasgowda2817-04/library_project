import { v4 as uuidv4 } from "uuid";

/**
 * Initial mock data
 * Stored as functions so the ids are fresh if imported multiple times
 */

export function initialBooks() {
  return [
    {
      id: uuidv4(),
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
      copies: 4,
      category: "Classic"
    },
    {
      id: uuidv4(),
      title: "1984",
      author: "George Orwell",
      isbn: "9780451524935",
      copies: 6,
      category: "Dystopia"
    },
    {
      id: uuidv4(),
      title: "Sapiens",
      author: "Yuval Noah Harari",
      isbn: "9780062316097",
      copies: 3,
      category: "Non-Fiction"
    }
  ];
}

export function initialMembers() {
  return [
    { id: uuidv4(), name: "Asha R", email: "asha@example.com", joined: "2024-08-10" },
    { id: uuidv4(), name: "Rohit K", email: "rohit@example.com", joined: "2023-11-01" },
    { id: uuidv4(), name: "Neha M", email: "neha@example.com", joined: "2025-01-17" }
  ];
}

export function sampleIssued() {
  return [
    { id: uuidv4(), bookTitle: "1984", memberName: "Rohit K", dueDate: "2025-11-10" }
  ];
}
