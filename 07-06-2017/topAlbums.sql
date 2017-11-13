USE topSongs_db;
CREATE TABLE albums (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ranking INTEGER NOT NULL,
    artist VARCHAR(100) NULL,
    album VARCHAR(100) NULL,
    year_released INTEGER NULL,
    worldRank DECIMAL(10,3) NULL,
    usRank DECIMAL(10,3) NULL,
    ukRank DECIMAL(10,3) NULL,
    euRank DECIMAL(10,3) NULL,
    rowRank DECIMAL(10,3) NULL
);
SELECT*FROM albums;

-- SELECT*FROM songs where artist='usher';

-- SELECT COUNT(*), artist FROM songs group by artist
-- order by count(*) desc;

