DROP DATABASE IF EXISTS topSongs_db;
CREATE DATABASE topSongs_db;
USE topSongs_db;
CREATE TABLE songs (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ranking INTEGER NOT NULL,
    artist VARCHAR(100) NULL,
    song VARCHAR(100) NULL,
    year_released INTEGER NULL,
    worldRank DECIMAL(10,3) NULL,
    usRank DECIMAL(10,3) NULL,
    ukRank DECIMAL(10,3) NULL,
    euRank DECIMAL(10,3) NULL,
    rowRank DECIMAL(10,3) NULL
);
SELECT*FROM songs;

SELECT*FROM songs
	WHERE year_released between 1990 and 2000;

SELECT COUNT(*), artist FROM songs group by artist
order by count(*) desc;

SELECT songs.artist, albums.artist
FROM songs
LEFT JOIN albums ON songs.artist = albums.artist;

SELECT * FROM songs 
inner join albums 
ON songs.artist=albums.artist
AND songs.year_released = albums.year_released
ORDER BY songs.id;
