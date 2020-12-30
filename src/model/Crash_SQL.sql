-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gg
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gg` ;

-- -----------------------------------------------------
-- Schema gg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gg` DEFAULT CHARACTER SET latin1 ;
USE `gg` ;

-- -----------------------------------------------------
-- Table `gg`.`vendedor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gg`.`vendedor` ;

CREATE TABLE IF NOT EXISTS `gg`.`vendedor` (
  `idvendedor` INT(11) NOT NULL AUTO_INCREMENT,
  `Usuario` VARCHAR(30) NOT NULL,
  `Contrasenia` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idvendedor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gg`.`venta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gg`.`venta` ;

CREATE TABLE IF NOT EXISTS `gg`.`venta` (
  `idventa` INT NOT NULL,
  `Nom_Compra` VARCHAR(30) NOT NULL,
  `Fecha` DATE NOT NULL,
  `Costo_Total` INT(4) NOT NULL,
  `Cantidad_Total` INT(3) NOT NULL,
  `idvendedor` INT NOT NULL,
  PRIMARY KEY (`idventa`),
  INDEX `fk_idvendedorVendedorVenta_idx` (`idvendedor` ASC),
  CONSTRAINT `fk_idvendedorVendedorVenta`
    FOREIGN KEY (`idvendedor`)
    REFERENCES `gg`.`vendedor` (`idvendedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gg`.`videojuego`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gg`.`videojuego` ;

CREATE TABLE IF NOT EXISTS `gg`.`videojuego` (
  `idvideojuego` INT NOT NULL,
  `Nombre_Video` VARCHAR(45) NOT NULL,
  `Descripcion` VARCHAR(250) NOT NULL,
  `Stock` INT(4) NOT NULL,
  `Cantidad_Vend` INT(3) NOT NULL,
  `Genero` VARCHAR(45) NOT NULL,
  `Costo` INT(4) NOT NULL,
  `Consola` VARCHAR(45) NOT NULL,
  `Anio` INT(4) NOT NULL,
  PRIMARY KEY (`idvideojuego`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gg`.`descripcionventa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gg`.`descripcionventa` ;

CREATE TABLE IF NOT EXISTS `gg`.`descripcionventa` (
  `iddescripcionventa` INT NOT NULL AUTO_INCREMENT,
  `Cantidad_Producto` INT(4) NOT NULL,
  `idventa` INT NOT NULL,
  `idvideojuego` INT NOT NULL,
  PRIMARY KEY (`iddescripcionventa`),
  INDEX `fk_idventaVentaDescVenta_idx` (`idventa` ASC),
  INDEX `fk_idvideojuegoVideojuegoDescVenta_idx` (`idvideojuego` ASC),
  CONSTRAINT `fk_idventaVentaDescVenta`
    FOREIGN KEY (`idventa`)
    REFERENCES `gg`.`venta` (`idventa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idvideojuegoVideojuegoDescVenta`
    FOREIGN KEY (`idvideojuego`)
    REFERENCES `gg`.`videojuego` (`idvideojuego`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gg`.`apartado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gg`.`apartado` ;

CREATE TABLE IF NOT EXISTS `gg`.`apartado` (
  `idapart` INT NOT NULL,
  `Nom_Compra` VARCHAR(30) NOT NULL,
  `Fecha` DATE NOT NULL,
  `Costo_Total` INT(4) NOT NULL,
  `Cantidad_Total` INT(3) NOT NULL,
  `Deposito` INT NOT NULL,
  `Diferencia` INT NOT NULL,
  `idvendedor` INT NOT NULL,
  PRIMARY KEY (`idapart`),
  INDEX `fk_idvendedorVededorApartado_idx` (`idvendedor` ASC),
  CONSTRAINT `fk_idvendedorVededorApartado`
    FOREIGN KEY (`idvendedor`)
    REFERENCES `gg`.`vendedor` (`idvendedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gg`.`descripcionapart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gg`.`descripcionapart` ;

CREATE TABLE IF NOT EXISTS `gg`.`descripcionapart` (
  `iddescripcionapart` INT NOT NULL AUTO_INCREMENT,
  `Cantidad_Producto` INT(4) NOT NULL,
  `idapart` INT NOT NULL,
  `idvideojuego` INT NOT NULL,
  PRIMARY KEY (`iddescripcionapart`),
  INDEX `fk_idapartadoApartadoDescApart_idx` (`idapart` ASC) ,
  INDEX `fk_idvideojuegoVideojuegoDescApart_idx` (`idvideojuego` ASC) ,
  CONSTRAINT `fk_idapartadoApartadoDescApart`
    FOREIGN KEY (`idapart`)
    REFERENCES `gg`.`apartado` (`idapart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idvideojuegoVideojuegoDescApart`
    FOREIGN KEY (`idvideojuego`)
    REFERENCES `gg`.`videojuego` (`idvideojuego`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `gg`.`vendedor`
-- -----------------------------------------------------
START TRANSACTION;
USE `gg`;
INSERT INTO `gg`.`vendedor` (`idvendedor`, `Usuario`, `Contrasenia`) VALUES (1, 'MigueLin', 'Crash1234');
INSERT INTO `gg`.`vendedor` (`idvendedor`, `Usuario`, `Contrasenia`) VALUES (2, 'Yehos', 'Crash2345');
INSERT INTO `gg`.`vendedor` (`idvendedor`, `Usuario`, `Contrasenia`) VALUES (3, 'Jordan', 'Crash3456');

COMMIT;


-- -----------------------------------------------------
-- Data for table `gg`.`venta`
-- -----------------------------------------------------
START TRANSACTION;
USE `gg`;
INSERT INTO `gg`.`venta` (`idventa`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `idvendedor`) VALUES (1, 'Jose Luis Meza', '2020/02/19', 2300, 2, 3);
INSERT INTO `gg`.`venta` (`idventa`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `idvendedor`) VALUES (2, 'Erick Alberto Sanchez', '2020/02/25', 1800, 2, 1);
INSERT INTO `gg`.`venta` (`idventa`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `idvendedor`) VALUES (3, 'Gerardo Melchor Alvarez', '2020/02/29', 1300, 1, 2);
INSERT INTO `gg`.`venta` (`idventa`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `idvendedor`) VALUES (4, 'Aidee Nayeli Gutierrez', '2020/03/05', 1200, 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `gg`.`videojuego`
-- -----------------------------------------------------
START TRANSACTION;
USE `gg`;
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (1, 'Crash Bandicoot N. Sane Trilogy', 'Tu marsupial favorito, vuelve mejorado, embelesado y listo para bailar. Ahora puedes disfrutar de Crash Bandicoot con gráficos remasterizados en alta definición.', 30, 3, 'Plataforma', 800, 'Play Station, Xbox', 2019);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (2, 'Nier: Automata - Game of the Yorha Edition', 'Batallas llenas de acción y combate fluido, perfecto tanto para los recién llegados como para los jugadores experimentados.', 27, 2, 'Rol de Accion', 1000, 'Play Station, Xbox', 2018);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (3, 'Final Fantasy VII Remake', 'FINAL FANTASY VII REMAKE presenta un sistema híbrido de batalla que une la acción en tiempo real con un combate estratégico.', 30, 0, 'Rol de Accion', 1700, 'Play Station, Xbox', 2020);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (4, 'God of War', 'Un comienzo totalmente nuevo Su venganza contra los dioses del Olimpo ha quedado atrás y Kratos ahora vive como un hombre en las tierras de los dioses y monstruos nórdicos.', 35, 3, 'Accion - Aventura', 600, 'Play Station, Xbox', 2005);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (5, 'Resident Evil 2', 'Un escalofriante reimaginado de un clásico de terror: basado en el lanzamiento de la consola PlayStation original en 1998.', 20, 6, 'Supervivencia', 1000, 'Play Station, Xbox', 2019);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (6, 'Devil May Cry 5', 'Nero creó su propia agencia de caza de demonios con una furgoneta adornada con un letrero de neón \"Devil May Cry\" que Dante le dio con el apoyo de Kyrie y su ingeniero Nico.', 25, 2, 'Plataforma', 700, 'Play Station, Xbox', 2019);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (7, 'Marvel\'s Spider-Man', 'Este no es el Hombre Araña que conocías o que habías visto antes. Este es un experimentado Peter Parker quien es extraordinario en la lucha contra el crimen en la Nueva York de Marvel.', 26, 8, 'Accion - Aventura', 1000, 'Play Station, Xbox', 2018);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (8, 'Star Wars Jedi Fallen Order', 'Comienza una nueva historia Jedi: como antiguo padawan huyendo del Imperio, debes completar tu entrenamiento antes de que los Inquisidores Imperiales descubran tu plan para revivir la Orden Jedi', 19, 8, 'Accion - Aventura', 1200, 'Play Station, Xbox', 2019);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (9, 'Ori and the Will of the Wisps', 'Sumérgete en una experiencia narrativa hecha a mano. Descubre el verdadero destino de Ori en esta emocionante e impactante aventura narrativa.', 23, 5, 'Metroidvania', 1100, 'Xbox', 2020);
INSERT INTO `gg`.`videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES (10, 'Call of Duty: Modern Warfare', 'El nuevo Modern Warfare presenta una experiencia narrativa unificada y una progresión a través de una épica e intensa historia para un jugador.', 20, 7, 'Shotter', 1300, 'Play Station', 2016);

COMMIT;


-- -----------------------------------------------------
-- Data for table `gg`.`descripcionventa`
-- -----------------------------------------------------
START TRANSACTION;
USE `gg`;
INSERT INTO `gg`.`descripcionventa` (`iddescripcionventa`, `Cantidad_Producto`, `idventa`, `idvideojuego`) VALUES (1, 1, 1, 10);
INSERT INTO `gg`.`descripcionventa` (`iddescripcionventa`, `Cantidad_Producto`, `idventa`, `idvideojuego`) VALUES (2, 1, 1, 2);
INSERT INTO `gg`.`descripcionventa` (`iddescripcionventa`, `Cantidad_Producto`, `idventa`, `idvideojuego`) VALUES (3, 1, 2, 1);
INSERT INTO `gg`.`descripcionventa` (`iddescripcionventa`, `Cantidad_Producto`, `idventa`, `idvideojuego`) VALUES (4, 1, 2, 5);
INSERT INTO `gg`.`descripcionventa` (`iddescripcionventa`, `Cantidad_Producto`, `idventa`, `idvideojuego`) VALUES (5, 1, 3, 10);
INSERT INTO `gg`.`descripcionventa` (`iddescripcionventa`, `Cantidad_Producto`, `idventa`, `idvideojuego`) VALUES (6, 1, 4, 8);

COMMIT;


-- -----------------------------------------------------
-- Data for table `gg`.`apartado`
-- -----------------------------------------------------
START TRANSACTION;
USE `gg`;
INSERT INTO `gg`.`apartado` (`idapart`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `Deposito`, `Diferencia`, `idvendedor`) VALUES (1, 'Karen Susana Mendez', '2020/02/17', 3000, 3, 1000, 2000, 2);
INSERT INTO `gg`.`apartado` (`idapart`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `Deposito`, `Diferencia`, `idvendedor`) VALUES (2, 'Juan Alberto Jimenes', '2020/02/25', 3300, 3, 1200, 2100, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `gg`.`descripcionapart`
-- -----------------------------------------------------
START TRANSACTION;
USE `gg`;
INSERT INTO `gg`.`descripcionapart` (`iddescripcionapart`, `Cantidad_Producto`, `idapart`, `idvideojuego`) VALUES (1, 2, 1, 8);
INSERT INTO `gg`.`descripcionapart` (`iddescripcionapart`, `Cantidad_Producto`, `idapart`, `idvideojuego`) VALUES (2, 1, 1, 4);
INSERT INTO `gg`.`descripcionapart` (`iddescripcionapart`, `Cantidad_Producto`, `idapart`, `idvideojuego`) VALUES (3, 1, 2, 10);
INSERT INTO `gg`.`descripcionapart` (`iddescripcionapart`, `Cantidad_Producto`, `idapart`, `idvideojuego`) VALUES (4, 2, 2, 5);

COMMIT;

