CREATE TABLE price_type(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    price_per_day INT NOT NULL,
    price_per_hour INT NOT NULL,
    late_fee_per_hour INT NOT NULL
);
CREATE TABLE rent(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    client_id INT NOT NULL,
    from_datetime VARCHAR(255) NOT NULL,
    to_datetime VARCHAR(255) NOT NULL,
    rent_status_id INT NOT NULL,
    rent_type_id INT NOT NULL,
    amount INT NOT NULL
);
CREATE TABLE car(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    car_number INT NOT NULL,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year VARCHAR(255) NOT NULL,
    mileage INT NOT NULL,
    price_type_id INT NOT NULL
);
CREATE TABLE client(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birthday VARCHAR(255) NOT NULL,
    passport VARCHAR(255) NOT NULL,
    driver_listense VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL
);