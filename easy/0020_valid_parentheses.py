class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in range(len(s)):
            if stack == []:
                stack.append(s[i])
            elif s[i] == ")" and stack[-1] == "(":
                stack.pop()
            elif s[i] == "}" and stack[-1] == "{":
                stack.pop()
            elif s[i] == "]" and stack[-1] == "[":
                stack.pop()
            else:
                stack.append(s[i])
        if stack == []:
            return True
        else:
            return False
        
