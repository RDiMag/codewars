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
    