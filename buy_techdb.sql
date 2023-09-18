/*
 Navicat Premium Data Transfer

 Source Server         : Buytech
 Source Server Type    : MySQL
 Source Server Version : 100427 (10.4.27-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : buy_techdb

 Target Server Type    : MySQL
 Target Server Version : 100427 (10.4.27-MariaDB)
 File Encoding         : 65001

 Date: 18/09/2023 15:02:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_detail
-- ----------------------------
DROP TABLE IF EXISTS `tb_detail`;
CREATE TABLE `tb_detail`  (
  `Id_Detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Id_Order` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id_Detail`) USING BTREE,
  INDEX `Id_Order`(`Id_Order` ASC) USING BTREE,
  CONSTRAINT `Id_Order` FOREIGN KEY (`Id_Order`) REFERENCES `tb_order` (`Id_Order`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_detail
-- ----------------------------

-- ----------------------------
-- Table structure for tb_keranjang
-- ----------------------------
DROP TABLE IF EXISTS `tb_keranjang`;
CREATE TABLE `tb_keranjang`  (
  `Nomor` int NOT NULL,
  `Id_Kerangjang` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Id_User` int NOT NULL,
  `Id_produk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id_Kerangjang`) USING BTREE,
  INDEX `UK`(`Id_User` ASC) USING BTREE,
  INDEX `PK`(`Id_produk` ASC) USING BTREE,
  CONSTRAINT `PK` FOREIGN KEY (`Id_produk`) REFERENCES `tb_produk` (`Id_Produk`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UK` FOREIGN KEY (`Id_User`) REFERENCES `tb_user` (`Id_User`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_keranjang
-- ----------------------------

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order`  (
  `Id_Order` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Id_User` int NOT NULL,
  `Id_Keranjang` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Jumlah_Barang` int NOT NULL,
  `Tgl_Transaksi` datetime NOT NULL,
  `Tgl_Pengiriman` datetime NOT NULL,
  PRIMARY KEY (`Id_Order`) USING BTREE,
  INDEX `Order_User`(`Id_User` ASC) USING BTREE,
  INDEX `Id_keranjang`(`Id_Keranjang` ASC) USING BTREE,
  CONSTRAINT `Id_keranjang` FOREIGN KEY (`Id_Keranjang`) REFERENCES `tb_keranjang` (`Id_Kerangjang`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Order_User` FOREIGN KEY (`Id_User`) REFERENCES `tb_user` (`Id_User`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_order
-- ----------------------------

-- ----------------------------
-- Table structure for tb_produk
-- ----------------------------
DROP TABLE IF EXISTS `tb_produk`;
CREATE TABLE `tb_produk`  (
  `Id_Produk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Nama_Produk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Spesifikasi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Gambar_Produk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id_Produk`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_produk
-- ----------------------------

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `Id_User` int NOT NULL AUTO_INCREMENT,
  `Nama_User` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Alamat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Nomor_Hp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id_User`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_user
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
