#Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

def get_grade(s1, s2, s3):
    avg = int((s1 + s2 + s3))/3
    print(avg)
    if avg <= 100 and avg >= 90:
        return 'A';
    elif avg <= 90 and avg >= 80:
        return 'B';
    elif avg <= 80 and avg >= 70:
        return 'C';
    elif avg <= 70 and avg >= 60:
        return 'D';
    else:
        return "F"
    
#In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

#Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

def move(position, roll):
    result = roll * 2 + position;
    return result;

#Rock, paper, scissors game

def rps(p1, p2):
    if p1 == 'rock' and p2 == 'scissors' or p1 == 'scissors' and p2 == 'paper' or p1 == 'paper' and p2 == 'rock':
        return 'Player 1 won!';
    elif p1 == p2:
        return "Draw!";
    else:
        return 'Player 2 won!';