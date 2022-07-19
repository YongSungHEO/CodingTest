# 전화번호 목록(Level2)
def solution(phone_book):
    answer = True
    
    phone_book.sort()
    for i in range(0, len(phone_book)):
        for j in range(i+1, len(phone_book)):
            if phone_book[j].startswith(phone_book[i]):
                return False
        
    return answer
