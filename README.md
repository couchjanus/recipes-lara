# recipes-lara

1. Create a Heroku app

Create an app name
```
app_name=recipes-lara
```

Create Heroku app
```
heroku apps:create $app_name

Creating ⬢ recipes-lara... done
```

```
heroku addons:create heroku-postgresql:hobby-dev --app $app_name

Creating heroku-postgresql:hobby-dev on ⬢ recipes-lara... free
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Created postgresql-amorphous-61023 as DATABASE_URL
Use heroku addons:docs heroku-postgresql to view documentation
```

```
heroku buildpacks:add heroku/php --app $app_name
```
Buildpack added. Next release on recipes-lara will use heroku/php.
Run git push heroku master to create a new release using this buildpack.

```
heroku buildpacks:add heroku/nodejs --app $app_name
```
Buildpack added. Next release on recipes-lara will use:
  1. heroku/php
  2. heroku/nodejs
Run git push heroku master to create a new release using these buildpacks.


2. Add Heroku git remote
```
heroku git:remote --app $app_name
```
set git remote heroku to https://git.heroku.com/recipes-lara.git


3. Set config parameters

For Laravel to operate correctly you need to set APP_KEY:
```
heroku config:set --app $app_name APP_KEY=$(php artisan --no-ansi key:generate --show)
```
Setting APP_KEY and restarting ⬢ recipes-lara... done, v4
APP_KEY: base64:3QWpqzRf7xiGks3Xxbg5sWsa2ghCRGAO4CQrmvGj4Q4=

Optionally set your app's environment to development
```
heroku config:set --app $app_name APP_ENV=development APP_DEBUG=true APP_LOG_LEVEL=debug
```

4. Deploy to Heroku
```
 git push heroku master
```
5. Run migrations
```
heroku run -a $app_name php artisan postdeploy:heroku
```
