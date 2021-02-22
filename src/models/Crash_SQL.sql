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

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contrasena` varchar(30) NOT NULL,
  `ciudad` varchar(30) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `cp` varchar(30) NOT NULL,
  `calle` varchar(30)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apartado`
--

CREATE TABLE `apartado` (
  `idapart` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombreCliente` varchar(30) NOT NULL,
  `apellidoCliente` varchar(30) NOT NULL,
  `videojuego` varchar(30) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `pago` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Estrenos`
--


CREATE TABLE `Estrenos` (
  `idEstreno` int(11) NOT NULL PRIMARY KEY,
  `nombreEstreno` varchar(250) NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `consola` varchar(45) NOT NULL,
  `fechaEstreno` date NOT NULL,
  `descripcion` varchar(250) NOT NULL,  
  `genero` varchar(45) NOT NULL,
  `cantidad` int(4) NOT NULL,
  `costo` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Estrenos`
--

INSERT INTO `Estrenos` VALUES
(1, 'Far Cry 6', 'https://m.media-amazon.com/images/I/81dCv7tLDfL._SL1500_.jpg', 'PC , PS4 , PS5 , Xbox One , Xbox Series X', '2021-02-18', 'Far Cry 6 es un próximo videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, y se espera que su lanzamiento sea para el año fiscal 2021/2022 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Google Stadia.', 'Accion - Aventura', 100, 1999.99),
(2, 'NieR Replicant Ver.1.22474487139...', 'https://static.wikia.nocookie.net/nier/images/2/2b/Cover_art_122.jpg/revision/latest?cb=20200924153913', 'PC , PS4 , Xbox One', '2021-04-23', 'NieR Replicant Ver.1.22474487139... es un videojuego de rol y acción japonés desarrollado por Square Enix que busca actualizar y mejorar la primera versión de NieR Replicant, de ahí su extraña nomenclatura que intenta desligarse de una especie de remasterización o remake.', 'Rol, Accion, Disparos', 120, 1499.99),
(3, 'S.T.A.L.K.E.R. 2', 'https://lh3.googleusercontent.com/proxy/yCNGvIMExs_Ok7Kk81jmZzOtDx5kc95Zz--1VgY5rMf9EfhqkhHcPmjS7if9tmgdFQTPDb_KM6V74-0VjBya8eD4f5mA28q_LeIa', 'PC , Xbox', '2021-12-31', 'STALKER 2 será un videojuego del género de disparos en primera persona ambientado en un futuro posapocalíptico, el cual se ambientará de nuevo en la Zona, un lugar inspirado en el área de exclusión de la central nuclear de Chernóbil, en la actual Ucrania.', 'Un jugador, Multijugador', 200, 1999.99),
(4, 'Bravely Default II', 'https://cdn.supersoluce.com/file/docs/docid_6006c9c39a20454c97000001/elemid_4ee9d6ec0a2fe93f0e00000c/bravely-default-ii-switch.jpg', 'Nintendo Switch', '2021-02-26', 'Bravely Default II es un próximo videojuego de rol desarrollado por Claytechworks para Nintendo Switch. Será publicado por Square Enix en Japón, con Nintendo manejando el lanzamiento en los territorios occidentales.', 'Juego de Rol - RPG', 150, 1499.99),
(5, 'Monster Hunter Rise', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/09/caratula-monster-hunter-rise-2071431.jpg?itok=ZZ-FUUl6', 'Nintendo Switch', '2021-03-26', 'Monster Hunter Rise es un próximo juego de rol de acción desarrollado y publicado por Capcom para Nintendo Switch. Es la sexta entrega principal de la serie Monster Hunter después de Monster Hunter: World y se lanzará en todo el mundo el 26 de marzo de 2021.', 'Multijugador', 100, 999.99),
(6, 'New Pokémon Snap', 'https://pbs.twimg.com/media/ErsiU_tW8AA27yB?format=jpg&name=large', 'Nintendo Switch', '2021-04-30', 'New Pokémon Snap es un videojuego de simulación en primera persona con una mecánica de juego de estilo shooter sobre rieles. Está siendo desarrollado por Bandai Namco Studios y está previsto que Nintendo y The Pokémon Company lo publiquen para Nintendo Switch', 'Simulacion, disparo', 250, 2499.99),
(7, 'Resident Evil Village', 'https://images.igdb.com/igdb/image/upload/t_cover_big/co29lx.jpg', 'PC, PS4, PS5, XOne, XSX', '2021-05-07', 'Resident Evil Village​ es un videojuego en desarrollo perteneciente al género de horror de supervivencia desarrollado y publicado por Capcom. El videojuego será la octava entrega mayor de la serie Resident Evil, ​​ y se tratará de una secuela directa de Resident Evil 7: Biohazard.​', 'Multijugador', 200, 1999.99),
(8, 'God of War: Ragnarök', 'https://pbs.twimg.com/media/Emwr1TNW4AEWcku.jpg', 'Nintendo Switch', '2021-03-26', 'God of War: Ragnarök es un próximo juego de acción y aventuras en desarrollo por Santa Monica Studio y que será publicado por Sony Interactive Entertainment.', 'Aventura, Acción', 200, 2499.99),
(9, 'Sherlock Holmes: Chapter One', 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsherlock-holmes-chapter-one%2Fhome%2FEGS_SherlockHolmesChapterOne_Frogwares_S2-1200x1600-a4b7c8bb29d638fec000f986310609dbb77cc728.jpg', 'PC, PS4, PS5, Xbox', '2021-03-26', 'En este thriller policial narrativo, un joven Sherlock Holmes lucha por demostrar su valía mientras recorre una isla exótica y peligrosa en el Mediterráneo para investigar el misterio de la muerte de su madre.', 'Aventura, Acción', 150, 999.99);

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
