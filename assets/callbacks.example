function mustachify(userId, callback) {
    loadUserFromDatabase(userId, function (err, user) {
        if (err) callback(err);
        else user.getBestFriend(function (err, friend) {
            if (err) callback(err);
            else friend.getBestPhoto(function (err, photo) {
                if (err) callback(err);
                else addMustache(photo, function (err, betterPhoto) {
                    if (err) callback(err);
                    else showPhotoToUser(user, betterPhoto, callback);
                });
            });
        });
    });
}