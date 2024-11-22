## Launch instructions
- Clone this repository and `cd` to its folder
- Create `.env` file from `.env.example` executing `cp .env.example .env`
- Run `composer install`
- Clear thrash from previous sail ups: `docker compose down --volumes`
- Build and launch containers: `./vendor/bin/sail up -d --build`
- Check that 2 containers are created with `docker ps`. (dev environment and mysql)
- Enter dev container with `docker exec -it {folderName}-laravel.test-1 bash`
- Inside container run `make setup`
- Inside container run `npm run dev` to launch front-end
- Go to localhost in your browser. The port is default 80.

Note: in case of vite errors remove `node_modules` folder and run `npm i`. After that try `npm run dev` again. 

That's it!
