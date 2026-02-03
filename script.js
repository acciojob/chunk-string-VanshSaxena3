function stringChop(str, size) {
  // Acceptance criteria: null string → empty array
  if (str == null) return [];

  // Convert size to number (prompt gives string)
  size = Number(size);

  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

