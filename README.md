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
<img width="419" height="278" alt="Add-Contact" src="https://github.com/user-attachments/assets/7f406e80-d919-4c37-be76-ae0471c107bf" />

3. Delete Contact (DELETE)
```bash
http delete http://localhost/api/contacts/2
```
<img width="375" height="226" alt="Delete-contact" src="https://github.com/user-attachments/assets/ec5251fe-be99-44ba-9462-5ebc2bcf5d58" />

4. Update Contact (PUT)
```bash
http put http://localhost/api/contacts/1 name='Benjamin'
```
<img width="430" height="222" alt="update-contact" src="https://github.com/user-attachments/assets/d22193ec-03b9-452a-8330-e35f272ca9be" />

5. Show Phone (GET)
```bash
http get http://localhost/api/contacts/1/phones/1
```
<img width="403" height="295" alt="show-phone" src="https://github.com/user-attachments/assets/dd417f0d-03b9-497f-b900-a7a41f9fcf4c" />

6. Add Phone (POST)
```bash
http post http://localhost/api/contacts/1/phones name='Home' number='040320323'
```
<img width="586" height="299" alt="add-phone" src="https://github.com/user-attachments/assets/c0ce1315-534b-4e76-9e40-ace9b3ec2722" />

7. Delete Phone (DELETE)
```bash
http delete http://localhost/api/contacts/1/phones/1
```
<img width="423" height="243" alt="delete-phone" src="https://github.com/user-attachments/assets/beb25eb5-897f-4a67-a908-cec71d9beba7" />

8. Update Phone (PUT)
```bash
http put http://localhost/api/contacts/1/phones/1 name="Work"
```
<img width="475" height="229" alt="update-phone" src="https://github.com/user-attachments/assets/5868880c-13c9-4829-b552-61853fccda95" />

## Task 3 Same API endpoints with changed sequelize database modeling
1. Show Contact (GET)
```bash
http get http://localhost/api/contacts/2
```
<img width="375" height="285" alt="show-contact-new" src="https://github.com/user-attachments/assets/ddae48d7-c3bf-4c0b-a260-719572bfb6bc" />

2. Add Contact (POST)
```bash
http post http://localhost/api/contacts name='Ben' address='Adelaide'
```
<img width="513" height="291" alt="add-contact-new" src="https://github.com/user-attachments/assets/8617890d-121e-4bc0-b654-6ad5daa5d831" />

3. Delete Contact (DELETE)
```bash
http delete http://localhost/api/contacts/2
```
<img width="385" height="236" alt="delete-contact-new" src="https://github.com/user-attachments/assets/75d6a3f7-9944-4fbe-8158-16bd54c09804" />

4. Update Contact (PUT)
```bash
http put http://localhost/api/contacts/2 name='Benjamin' address='Sydney'
```
<img width="548" height="236" alt="update-contact-new" src="https://github.com/user-attachments/assets/6fc0e977-4aba-453c-b76d-ce2357dac53b" />

5. Show Phone (GET)
```bash
http get http://localhost/api/contacts/1/phones/2
```
<img width="396" height="306" alt="show-phone-new" src="https://github.com/user-attachments/assets/5dfd2cf0-c767-474a-80aa-f2a0c3166d5b" />

6. Add Phone (POST)
```bash
http post http://localhost/api/contacts/1/phones phone_type='Home' phone_number='040320323'
```
<img width="634" height="312" alt="add-phone-new" src="https://github.com/user-attachments/assets/90bd0652-5879-4ac8-b8dc-d5acf693e18e" />

7. Delete Phone (DELETE)
```bash
http delete http://localhost/api/contacts/1/phones/1
```
<img width="406" height="236" alt="delete-phone-new" src="https://github.com/user-attachments/assets/2bdc7146-62b8-4721-a4a5-6b96432c1d58" />

8. Update Phone (PUT)
```bash
http put http://localhost/api/contacts/1/phones/2 phone_type="Work" phone_number='123232'
```
<img width="639" height="247" alt="update-phone-new" src="https://github.com/user-attachments/assets/7a9fe050-689b-481f-b453-49878e87baf6" />

## Extra not used API endpoints
9. Show All Contacts (GET)
```bash
http get http://localhost/api/contacts
```
<img width="392" height="406" alt="show-all-contacts" src="https://github.com/user-attachments/assets/ff835aaf-a0cc-4377-8733-852e159a950f" />

10. Show All Phones (GET)
```bash
http get http://localhost/api/contacts/2/phones
```
<img width="402" height="447" alt="show-all-phones" src="https://github.com/user-attachments/assets/b156793a-70a3-4165-ab29-22fde7c93e25" />

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
