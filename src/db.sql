create table if not exists `user` (
    `id` int(11) not null auto_increment,
    `name` varchar(255) not null,
    `email` varchar(255) not null,
    `password` varchar(255) not null,
    `created_at` datetime not null,
    `updated_at` datetime not null,
    'comercial' varchar(255) not null,
    primary key (`id`)
)

create table if not exits 'local' (
    'id' int(11) not null auto_increment,
    'nombre' varchar(255) not null,
    'direccion' varchar(255) not null,
    'telefono' varchar(255) not null,
    'descripcion' varchar(255) not null,
    'comercial-id' int(11) not null,
)

create table if not exits 'producto' (
    'id' int(11) not null auto_increment,
    'nombre' varchar(255) not null,
    'descripcion' varchar(255) not null,
    'precio' varchar(255) not null,
)

create table if not exits 'stock' (
    'id' int(11) not null auto_increment,
    'cantidad' varchar(255) not null,
    'producto-id' int(11) not null,
    'local-id' int(11) not null,
)

create table if not exit 'reparacion' (
    'id' int(11) not null auto_increment,
    'fecha' varchar(255) not null,
    'total' varchar(255) not null,
    'local-id' int(11) not null,
    'orden-servicio-id' int(11) not null,
    foreign key ('orden-servicio-id') references 'orden-servicio'('id'),
)

create table if not exits 'orden-servicio' (
    'id' int(11) not null auto_increment,
    'fecha-recepcion' varchar(255) not null,
    'total' varchar(255) not null,
    'local-id' int(11) not null,
    'nombre-cliente' varchar(255) not null,
    'telefono-cliente' varchar(255) not null,
)

create table if not exits 'pedido' (
    'id' int(11) not null auto_increment,
    'fecha' varchar(255) not null,
    'total' varchar(255) not null,
    'local-id' int(11) not null,
    'comercial-id' int(11) not null,
)