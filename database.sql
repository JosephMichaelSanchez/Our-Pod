CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	"first_name" varchar(255) NULL,
	"last_name" varchar(255) NULL,
	"address" varchar(255) NULL,
	"phone" varchar(25) NULL,
	"email" varchar(255) NULL,
	"pod_id" int NULL);

CREATE TABLE "pods" (
	"id" SERIAL PRIMARY KEY NOT NULL,
    "pod_name" varchar(255) NOT NULL,
    "key_code" varchar(255) NOT NULL, 
    "admin_id" int NULL);       

CREATE TABLE "hosting" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "date" DATE,
    "host" varchar(100) NULL,
    "pod_id" int NOT NULL);