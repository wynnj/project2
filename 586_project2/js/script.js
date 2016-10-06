$('.image-container').empty().justifiedImages({
    images : photos,
    rowHeight: 200,
    maxRowHeight: 400,
    thumbnailPath: function(photo, width, height){
        var purl = photo.url_s;
        if( photo.url_n && (width > photo.width_s * 1.2 || height > photo.height_s * 1.2) ) purl = photo.url_n;
        if( photo.url_m && (width > photo.width_n * 1.2 || height > photo.height_n * 1.2) ) purl = photo.url_m;
        if( photo.url_z && (width > photo.width_m * 1.2 || height > photo.height_m * 1.2) ) purl = photo.url_z;
        if( photo.url_l && (width > photo.width_z * 1.2 || height > photo.height_z * 1.2) ) purl = photo.url_l;
        return purl;
    },
    getSize: function(photo){
        return {width: photo.width_s, height: photo.height_s};
    },
    margin: 1
});
