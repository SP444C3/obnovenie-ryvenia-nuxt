export function generateToken() {
  return rand() + rand() + rand() + "-" + rand() + rand() + rand()
}

var rand = function() {
  return Math.random().toString(36).substr(2);
};
