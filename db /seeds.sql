INSERT INTO department (id, name,)
VALUES  (001, "Sales"),
        (002, "Finance"),
        (003, "Legal"),
        (004, "Engineer");
    
INSERT INTO role (id, title, salary,department_id)     
VALUES  (001, "Sales_Officer", 25000, 001),
        (002, "Finance_Officer", 32000, 003),
        (003, "Legal Officer", 32000, 003),
        (004, "Engineer", 26000, 004),
        (005, "Accountant",40000, 002),
        (006, "Solicitor", 40000, 003),
        (007, "Head of Finance", 55000, 002),
        (008, "Head of Sales", 45000, 002)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE   (001, "Mike", "Smith","Sale_Officer", 002),
        (002, "Carol", "Smyth", "Sales_Officer",002),
        (003, "Jacqie", "Allen", "Head of Finance", true),
        (004, "Sarah", "Smile", "Finance Officer", 005),
        (005, "Tom", "Harvard", "Accountant",007),
        (006, "Lucy", "Birmingham", "Solicitor", 007),
        (007, "Rudy", "Mann", "Engineer", 004),
        (008, "Natalie", "Spam","Engineer",004),



