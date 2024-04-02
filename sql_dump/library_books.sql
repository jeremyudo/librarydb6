-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: library-db.mysql.database.azure.com    Database: library
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `ISBN` int unsigned NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Authors` varchar(255) NOT NULL,
  `PublicationDate` date NOT NULL,
  `Genre` varchar(100) DEFAULT NULL,
  `Edition` varchar(100) DEFAULT NULL,
  `Publisher` varchar(255) DEFAULT NULL,
  `Language` varchar(50) NOT NULL,
  `PageCount` int unsigned DEFAULT NULL,
  `Description` text,
  `CoverImageURL` varchar(255) DEFAULT NULL,
  `AvailabilityStatus` varchar(50) NOT NULL,
  `LocationShelf` varchar(100) DEFAULT NULL,
  `Cost` decimal(10,2) DEFAULT NULL,
  `AverageRating` decimal(3,2) DEFAULT NULL,
  `TotalRatings` int DEFAULT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Stock` int unsigned NOT NULL,
  `NumberCheckedOut` int unsigned NOT NULL DEFAULT '0',
  `NumberHeld` int unsigned NOT NULL DEFAULT '0',
  `NumberAvailable` int unsigned NOT NULL,
  `Lost/Damaged` int DEFAULT '0',
  `LOC Class` char(1) NOT NULL,
  `LOC Subclass` varchar(2) NOT NULL,
  `LOC Sub Number` int NOT NULL,
  `LOC Cutter Letter` varchar(2) NOT NULL,
  `LOC Cutter Dec` double NOT NULL,
  `LOC Final Line` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ISBN`),
  CONSTRAINT `BookStockIsCorrect` CHECK ((((`NumberCheckedOut` + `NumberAvailable`) + `NumberHeld`) = `Stock`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-01 13:09:33
