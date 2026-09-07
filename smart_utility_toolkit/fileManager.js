const fs = require("fs");

const fileName = "test.txt";

console.log("Starting File Manager...");

// CREATE
console.log("Creating file...");

fs.writeFile(fileName, "Hello Node.js\n", (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File Created");

    // READ
    console.log("Reading file...");

    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File Content:");
        console.log(data);

        // UPDATE
        console.log("Updating file...");

        fs.appendFile(fileName, "Learning FS Module\n", (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }

            console.log("File Updated");

            // READ AGAIN
            fs.readFile(fileName, "utf8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file:", err.message);
                    return;
                }

                console.log("Updated Content:");
                console.log(updatedData);

                // DELETE
                console.log("Deleting file...");

                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err.message);
                        return;
                    }

                    console.log("File Deleted");
                    console.log("File Manager completed.");
                });
            });
        });
    });
});