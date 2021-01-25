-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-01-2021 a las 23:20:53
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gg`
--

DROP DATABASE IF EXISTS `gg`;

CREATE DATABASE IF NOT EXISTS `gg` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gg`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apartado`
--


CREATE TABLE `apartado` (
  `idapart` int(11) NOT NULL,
  `Nom_Compra` varchar(30) NOT NULL,
  `Fecha` date NOT NULL,
  `Costo_Total` int(4) NOT NULL,
  `Cantidad_Total` int(3) NOT NULL,
  `Deposito` int(11) NOT NULL,
  `Diferencia` int(11) NOT NULL,
  `idvendedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `apartado`
--

INSERT INTO `apartado` (`idapart`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `Deposito`, `Diferencia`, `idvendedor`) VALUES
(1, 'Karen Susana Mendez', '2020-02-17', 3000, 3, 1000, 2000, 2),
(2, 'Juan Alberto Jimenes', '2020-02-25', 3300, 3, 1200, 2100, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcionapart`
--


CREATE TABLE `descripcionapart` (
  `iddescripcionapart` int(11) NOT NULL,
  `Cantidad_Producto` int(4) NOT NULL,
  `idapart` int(11) NOT NULL,
  `idvideojuego` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `descripcionapart`
--

INSERT INTO `descripcionapart` (`iddescripcionapart`, `Cantidad_Producto`, `idapart`, `idvideojuego`) VALUES
(1, 2, 1, 8),
(2, 1, 1, 4),
(3, 1, 2, 10),
(4, 2, 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcionventa`
--


CREATE TABLE `descripcionventa` (
  `iddescripcionventa` int(11) NOT NULL,
  `Cantidad_Producto` int(4) NOT NULL,
  `idventa` int(11) NOT NULL,
  `idvideojuego` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `descripcionventa`
--

INSERT INTO `descripcionventa` (`iddescripcionventa`, `Cantidad_Producto`, `idventa`, `idvideojuego`) VALUES
(1, 1, 1, 10),
(2, 1, 1, 2),
(3, 1, 2, 1),
(4, 1, 2, 5),
(5, 1, 3, 10),
(6, 1, 4, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--


CREATE TABLE `ofertas` (
  `Idoferta` int(11) NOT NULL,
  `idvideojuego` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--


CREATE TABLE `vendedor` (
  `idvendedor` int(11) NOT NULL,
  `Usuario` varchar(30) NOT NULL,
  `Contrasenia` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`idvendedor`, `Usuario`, `Contrasenia`) VALUES
(1, 'MigueLin', 'Crash1234'),
(2, 'Yehos', 'Crash2345'),
(3, 'Jordan', 'Crash3456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--


CREATE TABLE `venta` (
  `idventa` int(11) NOT NULL,
  `Nom_Compra` varchar(30) NOT NULL,
  `Fecha` date NOT NULL,
  `Costo_Total` int(4) NOT NULL,
  `Cantidad_Total` int(3) NOT NULL,
  `idvendedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`idventa`, `Nom_Compra`, `Fecha`, `Costo_Total`, `Cantidad_Total`, `idvendedor`) VALUES
(1, 'Jose Luis Meza', '2020-02-19', 2300, 2, 3),
(2, 'Erick Alberto Sanchez', '2020-02-25', 1800, 2, 1),
(3, 'Gerardo Melchor Alvarez', '2020-02-29', 1300, 1, 2),
(4, 'Aidee Nayeli Gutierrez', '2020-03-05', 1200, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuego`
--


CREATE TABLE `videojuego` (
  `idvideojuego` int(11) NOT NULL,
  `Nombre_Video` varchar(45) NOT NULL,
  `Descripcion` varchar(250) NOT NULL,
  `Stock` int(4) NOT NULL,
  `Cantidad_Vend` int(3) NOT NULL,
  `Genero` varchar(45) NOT NULL,
  `Costo` decimal(4,0) NOT NULL,
  `Consola` varchar(45) NOT NULL,
  `Anio` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `videojuego`
--

INSERT INTO `videojuego` (`idvideojuego`, `Nombre_Video`, `Descripcion`, `Stock`, `Cantidad_Vend`, `Genero`, `Costo`, `Consola`, `Anio`) VALUES
(1, 'Crash Bandicoot N. Sane Trilogy', 'Tu marsupial favorito, vuelve mejorado, embelesado y listo para bailar. Ahora puedes disfrutar de Crash Bandicoot con gráficos remasterizados en alta definición.', 30, 3, 'Plataforma', '800', 'Play Station, Xbox', 2019),
(2, 'Nier: Automata - Game of the Yorha Edition', 'Batallas llenas de acción y combate fluido, perfecto tanto para los recién llegados como para los jugadores experimentados.', 27, 2, 'Rol de Accion', '1000', 'Play Station, Xbox', 2018),
(3, 'Final Fantasy VII Remake', 'FINAL FANTASY VII REMAKE presenta un sistema híbrido de batalla que une la acción en tiempo real con un combate estratégico.', 30, 0, 'Rol de Accion', '1700', 'Play Station, Xbox', 2020),
(4, 'God of War', 'Un comienzo totalmente nuevo Su venganza contra los dioses del Olimpo ha quedado atrás y Kratos ahora vive como un hombre en las tierras de los dioses y monstruos nórdicos.', 35, 3, 'Accion - Aventura', '600', 'Play Station, Xbox', 2005),
(5, 'Resident Evil 2', 'Un escalofriante reimaginado de un clásico de terror: basado en el lanzamiento de la consola PlayStation original en 1998.', 20, 6, 'Supervivencia', '1000', 'Play Station, Xbox', 2019),
(6, 'Devil May Cry 5', 'Nero creó su propia agencia de caza de demonios con una furgoneta adornada con un letrero de neón \"Devil May Cry\" que Dante le dio con el apoyo de Kyrie y su ingeniero Nico.', 25, 2, 'Plataforma', '700', 'Play Station, Xbox', 2019),
(7, 'Marvel\'s Spider-Man', 'Este no es el Hombre Araña que conocías o que habías visto antes. Este es un experimentado Peter Parker quien es extraordinario en la lucha contra el crimen en la Nueva York de Marvel.', 26, 8, 'Accion - Aventura', '1000', 'Play Station, Xbox', 2018),
(8, 'Star Wars Jedi Fallen Order', 'Comienza una nueva historia Jedi: como antiguo padawan huyendo del Imperio, debes completar tu entrenamiento antes de que los Inquisidores Imperiales descubran tu plan para revivir la Orden Jedi', 19, 8, 'Accion - Aventura', '1200', 'Play Station, Xbox', 2019),
(9, 'Ori and the Will of the Wisps', 'Sumérgete en una experiencia narrativa hecha a mano. Descubre el verdadero destino de Ori en esta emocionante e impactante aventura narrativa.', 23, 5, 'Metroidvania', '1100', 'Xbox', 2020),
(10, 'Call of Duty: Modern Warfare', 'El nuevo Modern Warfare presenta una experiencia narrativa unificada y una progresión a través de una épica e intensa historia para un jugador.', 20, 7, 'Shotter', '1300', 'Play Station', 2016);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apartado`
--
ALTER TABLE `apartado`
  ADD PRIMARY KEY (`idapart`),
  ADD KEY `fk_idvendedorVededorApartado_idx` (`idvendedor`);

--
-- Indices de la tabla `descripcionapart`
--
ALTER TABLE `descripcionapart`
  ADD PRIMARY KEY (`iddescripcionapart`),
  ADD KEY `fk_idapartadoApartadoDescApart_idx` (`idapart`),
  ADD KEY `fk_idvideojuegoVideojuegoDescApart_idx` (`idvideojuego`);

--
-- Indices de la tabla `descripcionventa`
--
ALTER TABLE `descripcionventa`
  ADD PRIMARY KEY (`iddescripcionventa`),
  ADD KEY `fk_idventaVentaDescVenta_idx` (`idventa`),
  ADD KEY `fk_idvideojuegoVideojuegoDescVenta_idx` (`idvideojuego`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`Idoferta`),
  ADD KEY `fk_idvideojuegoVideojuegoOferta_idx` (`idvideojuego`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`idvendedor`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`idventa`),
  ADD KEY `fk_idvendedorVendedorVenta_idx` (`idvendedor`);

--
-- Indices de la tabla `videojuego`
--
ALTER TABLE `videojuego`
  ADD PRIMARY KEY (`idvideojuego`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `descripcionapart`
--
ALTER TABLE `descripcionapart`
  MODIFY `iddescripcionapart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `descripcionventa`
--
ALTER TABLE `descripcionventa`
  MODIFY `iddescripcionventa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `Idoferta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `idvendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apartado`
--
ALTER TABLE `apartado`
  ADD CONSTRAINT `fk_idvendedorVededorApartado` FOREIGN KEY (`idvendedor`) REFERENCES `vendedor` (`idvendedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `descripcionapart`
--
ALTER TABLE `descripcionapart`
  ADD CONSTRAINT `fk_idapartadoApartadoDescApart` FOREIGN KEY (`idapart`) REFERENCES `apartado` (`idapart`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_idvideojuegoVideojuegoDescApart` FOREIGN KEY (`idvideojuego`) REFERENCES `videojuego` (`idvideojuego`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `descripcionventa`
--
ALTER TABLE `descripcionventa`
  ADD CONSTRAINT `fk_idventaVentaDescVenta` FOREIGN KEY (`idventa`) REFERENCES `venta` (`idventa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_idvideojuegoVideojuegoDescVenta` FOREIGN KEY (`idvideojuego`) REFERENCES `videojuego` (`idvideojuego`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `fk_idvendedorVendedorVenta` FOREIGN KEY (`idvendedor`) REFERENCES `vendedor` (`idvendedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `ofertas`
  ADD CONSTRAINT `fk_idvideojuegoVideojuegoOferta_idx` FOREIGN KEY (`idvideojuego`) REFERENCES `videojuego` (`idvideojuego`) ON DELETE NO ACTION ON UPDATE NO ACTION;


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
