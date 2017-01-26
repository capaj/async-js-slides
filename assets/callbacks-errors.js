function mustachify(userId, callback) {
    try {
        loadUserFromDatabase(userId, function (err, user) {
            if (err) callback(err);
            else {
                try {
                    user.getBestFriend(function (err, friend) {
                        if (err) callback(err);
                        else {
                            try {
                                friend.getBestPhoto(function (err, photo) {
                                    if (err) callback(err);
                                    else {
                                        try {
                                            addMustache(photo, function (err, betterPhoto) {
                                                if (err) callback(err);
                                                else {
                                                    try {
                                                        showPhotoToUser(user, betterPhoto, callback);
                                                    } catch (e) { callback(e) }
                                                }
                                            });
                                        } catch (e) { callback(e) }
                                    }
                                });
                            } catch (e) { callback(e) }
                        }
                    });
                } catch (e) { callback(e) }
            }
        });
    } catch (e) { callback(e) }
}