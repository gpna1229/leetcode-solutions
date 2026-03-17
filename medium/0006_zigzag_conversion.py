class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        zigzag_str = ""
        for i in range(numRows):
            curr = i
            while curr < len(s):
                zigzag_str += s[curr]
                curr += 2 * numRows - 2 * (curr % (numRows - 1)) - 2
        return zigzag_str
