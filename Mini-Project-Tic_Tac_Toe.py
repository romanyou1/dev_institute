def create_board():
    return [[" " for _ in range(3)] for _ in range(3)]


def display_board(board):
    print("\n  1   2   3")
    for i, row in enumerate(board, start=1):
        print(f"{i} {row[0]} | {row[1]} | {row[2]}")
        if i < 3:
            print("  --+---+--")
    print()


def player_input(board, player):
    while True:
        try:
            row = int(input(f"Player {player} - Enter row (1-3): "))
            col = int(input(f"Player {player} - Enter column (1-3): "))

            if row < 1 or row > 3 or col < 1 or col > 3:
                print("Invalid position. Please choose numbers between 1 and 3.")
                continue

            # Convert to 0-based index
            row -= 1
            col -= 1

            if board[row][col] != " ":
                print("That spot is already taken. Choose another one.")
                continue

            return row, col

        except ValueError:
            print("Invalid input. Please enter numbers only.")


def check_win(board, player):
    # Check rows
    for row in board:
        if row[0] == player and row[1] == player and row[2] == player:
            return True

    # Check columns
    for col in range(3):
        if board[0][col] == player and board[1][col] == player and board[2][col] == player:
            return True

    # Check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False


def check_tie(board):
    for row in board:
        for cell in row:
            if cell == " ":
                return False
    return True


def play():
    board = create_board()
    current_player = "X"

    while True:
        display_board(board)

        row, col = player_input(board, current_player)
        board[row][col] = current_player

        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break

        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break

        # Switch player
        current_player = "O" if current_player == "X" else "X"


play()
