# README.md

Assignment2: This is Option A
Github Repo: Ben's shared repository: https://github.com/LaTrobeBen/Assignment2.git


Make sure for **your case it is in Private**
## Access Database
1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:
   ```bash
   docker ps
    9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
    53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
    c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
    9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
   ```
3. Running the application

**docker compose command:**
   ```bash
   docker compose up --build
   ```

## Executing API

## Task 2- API Command Demonstrations
1. Show Contact (GET)
```bash
http get http://localhost/api/contacts/1
```
<img width="413" height="260" alt="show-contact" src="https://github.com/user-attachments/assets/714e5525-cd93-4157-9778-7a1ec6ce4400" />

2. Add Contact (POST)
```bash
http post http://localhost/api/contacts name='Justin'
```

3. Delete Contact (DELETE)
```bash
http delete http://localhost/api/contacts/2
```

4. Update Contact (PUT)
```bash
http put http://localhost/api/contacts/1 name='Benjamin'
```

5. Show Phone (GET)
```bash
http get http://localhost/api/contacts/1/phones/1
```

6. Add Phone (POST)
```bash
http post http://localhost/api/contacts/1/phones name='Home' number='040320323'
```

7. Delete Phone (DELETE)
```bash
http delete http://localhost/api/contacts/1/phones/1
```

8. Update Phone (PUT)
```bash
http put http://localhost/api/contacts/1/phones/1 name="Work"
```

## Task 3 Same API endpoints with changed sequelize database modeling
1. Show Contact (GET)
```bash
http get http://localhost/api/contacts/2
```

2. Add Contact (POST)
```bash
http post http://localhost/api/contacts name='Ben' address='Adelaide'
```

3. Delete Contact (DELETE)
```bash
http delete http://localhost/api/contacts/2
```

4. Update Contact (PUT)
```bash
http put http://localhost/api/contacts/2 name='Benjamin' address='Sydney'
```

5. Show Phone (GET)
```bash
http get http://localhost/api/contacts/1/phones/2
```

6. Add Phone (POST)
```bash
http post http://localhost/api/contacts/1/phones phone_type='Home' phone_number='040320323'
```

7. Delete Phone (DELETE)
```bash
http delete http://localhost/api/contacts/1/phones/1
```

8. Update Phone (PUT)
```bash
http put http://localhost/api/contacts/1/phones/2 phone_type="Work" phone_number='123232'
```

## Extra not used API endpoints
9. Show All Contacts (GET)
```bash
http get http://localhost/api/contacts
```

10. Show All Phones (GET)
```bash
http get http://localhost/api/contacts/2/phones
```

## Creating Companies in model, controller, routes and frontend
### Model Company
Created the model for company with the attributes:
`company_id` PK
`company_name`
`company_address`
`contact_id` FK references contacts.id

### Routes company
#### Company Route into app.js
Updated the express router to use the comapny routes.

#### Created routes for companies
11. Show Company (GET)
```bash
http get http://localhost/api/contacts/1/companies/1
```

12. Add Company (POST)
```bash
http post http://localhost/api/contacts/1/companies company_name='My Business' company_address='Glenelg'
```

13. Delete Company (DELETE)
```bash
http delete http://localhost/api/contacts/1/companies/2
```

14. Update Company (PUT)
```bash
http put http://localhost/api/contacts/1/companies/1 company_name="My First Business" company_address="Glenelg North"
```

15. Show All Companies (GET)
```bash
http get http://localhost/api/contacts/1/companies
```

### Company controllers
Create company controller

Show all companies for contact controller

Show company controller

Update company controller

Delete company controller

### Company Frontend Updates
#### Create Company
Function

UI

#### Show companies for contact
Function

UI


#### Update Company
Function

UI


#### Delete Company
Function
