enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function dosmt(keyPress: Direction) {
  if (keyPress == Direction.Down) {
    console.log("down pressed");
  }
}

dosmt(Direction.Up);
