function isAnagram(str1, str2) {
  // Remove whitespace and convert to lowercase
  const cleaned1 = str1.replace(/\s+/g, "").toLowerCase();
  const cleaned2 = str2.replace(/\s+/g, "").toLowerCase();

  // If lengths differ, they can't be anagrams
  if (cleaned1.length !== cleaned2.length) {
    return false;
  }

  // Sort characters and compare
  return cleaned1.split("").sort().join("") === cleaned2.split("").sort().join("");
}