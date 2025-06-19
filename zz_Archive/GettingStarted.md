# Developer Docs Core

### Getting started 

#### Linux

###### Setting up database

1. Install Postgresql `sudo apt install postgresql postgresql-contrib`
2. Switch to account `sudo -u postgres psql`
3. Create a user `createuser codidact`
4. Create a database `createdb --owner codidact codidact`
5. Prepare the connection string, the format should be `Server=127.0.0.1;Port=5432;Database=codidact;User Id=codidact;Password=yourPassword;`.

###### Setting up repository with vscode

1. Clone the repo
2. Create a new branch, there are naming conventions for branches, check them out too. Checkout the new branch
3. Install .NET Core sdk 3.1 (or latest). On arch you'll need to install the sdk and `aspnet-runtime` packages.
4. Install Visual Studio Code, install the `ms-vscode.csharp` extension 
5. Open the folder with the git repo, go to the command palette by `View > Command palette` and run the `.NET: Generate Assets for Build and Debug` command 
6. Setup secrets, `cd` to `src/WebUI` folder and run `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "ConnectionString"`. This connection string we made in the 5th point of "Setting up database".
7. You can now launch the project by going to `Debug > Start Debugging`

###### Setting up repository without vscode

1. Clone the repo.
2. Create a new branch, there are naming conventions for branches, check them out too. Checkout the new branch
3. Install .NET Core sdk 3.1 (or latest). On arch you'll need to install the sdk and `aspnet-runtime` packages.
4. Setup secrets, `cd` to `src/WebUI` folder and run `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "ConnectionString"`. This connection string we made in the 5th point of "Setting up database".
5. Run the `dotnet run` command.

#### Windows 

###### Setting up database

1. Install Postgresql through the [EnterpriseDB Installer](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads). Version 12 or newer is needed.
2. Run pgAdmin, right click on `Servers > LocalServer > Login/Group Roles` then `Create > Login/Group Role`. Make sure you check "Can Login" and add a password to it (necessary). Any name is fine but we assume `codidact` for now.
3. Create a database, through the user interface, right click on `Servers > LocalServer > Databases` and click `Create > Database`. You can choose any name but we assume codidact for now
4. Prepare the connection string with the format specified earlier.

###### Setting up repository with Visual studio

1. Install visual studio, the "community edition" is sufficent.
2. Install the "ASP.NET and Web Development" workload during installation
3. Clone the repo, you can do this from the launcher through visual studio
4. Create a new branch, there are naming conventions for branches, check them out too. Checkout the new branch
5. Setup secrets, `cd` to `src/WebUI` folder and run `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "ConnectionString"`. This connection string we made in the 5th point of "Setting up database" for linux.
6. Start the application by clicking `Debug > Start Debugging`.
7. You can run test by going to `Test > Run all Tests`

###### Setting up repository without Visual studio

1. Clone the repo.
2. Install .NET Core sdk 3.1 (or latest).
3. Setup secrets, `cd` to `src/WebUI` folder and run `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "ConnectionString"`. This connection string we made in the 5th point of "Setting up database".
4. Run the `dotnet run` command.

##### OS 

###### Setting up database

1. Install postgres, the recommended way is with `HomeBrew`, install it if you haven't by `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"` in the terminal then `brew install postgresql`
2. Switch to account `sudo -u postgres psql`
3. Create a user `createuser codidact`
4. Create a database `createdb --owner codidact codidact`
5. Prepare the connection string, the format should be `Server=127.0.0.1;Port=5432;Database=codidact;User Id=codidact;Password=yourPassword;`.

###### Setting up repository with Visual studio

1. Install Visual Studio, the "community edition" is sufficent.
2. Install the "ASP.NET and Web Development" workload during installation
3. Clone the repo, you can do this from the launcher through visual studio
4. Create a new branch, there are naming conventions for branches, check them out too. Checkout the new branch
5. Setup secrets, `cd` to `src/WebUI` folder and run `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "ConnectionString"`. This connection string we made in the 5th point of "Setting up database" for linux.
6. Start the application by clicking `Debug > Start Debugging`.
7. You can run test by going to `Test > Run all Tests`

###### Setting up repository without Visual studio

1. Clone the repo.
2. Install .NET Core sdk 3.1 (or latest) from the website, don't use homebrew.
3. Setup secrets, `cd` to `src/WebUI` folder and run `dotnet user-secrets set "ConnectionStrings:DefaultConnection" "ConnectionString"`. This connection string we made in the 5th point of "Setting up database".
4. Run the `dotnet run` command.