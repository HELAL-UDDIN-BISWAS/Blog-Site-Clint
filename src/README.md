FIREBASES:
It helps developers to build their apps faster and in a more secure way

JWT:
To verify JWT claims
Decode the token and compare the exp claim to the current time.
If your access token includes an aws. cognito. signin. user. admin claim, send a request to an API like GetUser. ...
Present your access token in a request to the UserInfo endpoint. Your request returns an error if your token has expired