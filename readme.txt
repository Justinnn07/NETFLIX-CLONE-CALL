1.gpg --full-generate-key
2.gpg --armor --export <public key> (public key == gpg -k)
3. git config --global user.signingkey <public key>
4.git config --global commit.gpgsign true
