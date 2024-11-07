<!-- resources/views/emails/user-details.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Your Account Details</title>
</head>
<body>
    <h1>Welcome, {{ $user->name }}!</h1>
    <p>Your account has been created. Here are your login details:</p>
    <ul>
        <li>Username: {{ $username }}</li>
        <li>Email: {{ $email }}</li>
        <li>Password: {{ $password }}</li>
    </ul>
    <p>Please keep this information secure.</p>
</body>
</html>
