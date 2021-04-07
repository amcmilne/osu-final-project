DROP DATABASE IF EXISTS quotes_db;
CREATE DATABASE quotes_db;

USE quotes_db;



INSERT INTO clients (fullName, address, email, createdAt, updatedAt)
values ("Renee Martin", "1523 College St", "renee.martin@gmail.com", NOW(), NOW());

INSERT INTO clients (fullName, address, email, createdAt, updatedAt)
values ("Athenais Leveque", "992 Romilly Rd", "athenais.leveque@gmail.com", NOW(), NOW());

INSERT INTO clients (fullName, address, email, createdAt, updatedAt)
values ("Claudio Donini", "123 Crocetta Ct", "claudio.donini@gmail.com", NOW(), NOW());

INSERT INTO clients (fullName, address, email, createdAt, updatedAt)
values ("Verena Otto", "4357 Beringar Blvd", "verena.otto@gmail.com", NOW(), NOW());

INSERT INTO clients (fullName, address, email, createdAt, updatedAt)
values ("Grigoriy Zhukov", "23 Lebedeva Ln", "grigoriy.zhukov@gmail.com", NOW(), NOW());
