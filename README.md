## Launch instructions
- Run `sail up -d`
- Enter container with `docker exec -it nux-test-laravel.test-1 bash`
- Inside container run `make setup`
- Inside container run `npm run dev` to launch front-end
- Go to localhost in your browser. The port is default 80.

That's it deployment is up and running!
