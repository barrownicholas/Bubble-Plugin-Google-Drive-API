function(properties, context) {
    var fileMetadata = {'name': 'Invoices','mimeType': 'application/vnd.google-apps.folder'};
    drive.files.create({
        resource: fileMetadata,
        fields: 'id'
    }, function (err, file) {
        if (err) {
            // Handle error
            console.log(err);
            console.error(err);
        } else {
            console.log('Folder Id: ', file.id);
        }
    });
}