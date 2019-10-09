const catalog = {
    computed: {
        cartCount: {
            get: function() {
                return this.$store.state.cartCount;
            },
            set: function (val) {
                this.$store.commit('change', {name: 'cartCount', val: val});
            }
        },
    },
    data() {
      return {
          catalogTestProducts: JSON.parse('[{"id":51,"src":"/images/7\\\\70\\\\703\\\\7037\\\\70374147\\\\1_600w.jpg","src_set":"/images/7\\\\70\\\\703\\\\7037\\\\70374147\\\\1_600w.jpg 600w,/images/7\\\\70\\\\703\\\\7037\\\\70374147\\\\1_500w.jpg 500w,/images/7\\\\70\\\\703\\\\7037\\\\70374147\\\\1_400w.jpg 400w,/images/7\\\\70\\\\703\\\\7037\\\\70374147\\\\1_300w.jpg 300w,/images/7\\\\70\\\\703\\\\7037\\\\70374147\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"MYGGJAGARE","price":394,"artNumber":"70374147","cartConfirmRemove":false},{"id":52,"src":"/images/7\\\\70\\\\704\\\\7042\\\\70429913\\\\1_600w.jpg","src_set":"/images/7\\\\70\\\\704\\\\7042\\\\70429913\\\\1_600w.jpg 600w,/images/7\\\\70\\\\704\\\\7042\\\\70429913\\\\1_500w.jpg 500w,/images/7\\\\70\\\\704\\\\7042\\\\70429913\\\\1_400w.jpg 400w,/images/7\\\\70\\\\704\\\\7042\\\\70429913\\\\1_300w.jpg 300w,/images/7\\\\70\\\\704\\\\7042\\\\70429913\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"TRÅDFRI","price":390,"artNumber":"70429913","cartConfirmRemove":false},{"id":53,"src":"/images/8\\\\80\\\\804\\\\8042\\\\80428475\\\\1_600w.jpg","src_set":"/images/8\\\\80\\\\804\\\\8042\\\\80428475\\\\1_600w.jpg 600w,/images/8\\\\80\\\\804\\\\8042\\\\80428475\\\\1_500w.jpg 500w,/images/8\\\\80\\\\804\\\\8042\\\\80428475\\\\1_400w.jpg 400w,/images/8\\\\80\\\\804\\\\8042\\\\80428475\\\\1_300w.jpg 300w,/images/8\\\\80\\\\804\\\\8042\\\\80428475\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"FÖRNUFT","price":79,"artNumber":"80428475","cartConfirmRemove":false},{"id":54,"src":"/images/9\\\\90\\\\904\\\\9044\\\\90443178\\\\5_600w.jpg","src_set":"/images/9\\\\90\\\\904\\\\9044\\\\90443178\\\\5_600w.jpg 600w,/images/9\\\\90\\\\904\\\\9044\\\\90443178\\\\5_500w.jpg 500w,/images/9\\\\90\\\\904\\\\9044\\\\90443178\\\\5_400w.jpg 400w,/images/9\\\\90\\\\904\\\\9044\\\\90443178\\\\5_300w.jpg 300w,/images/9\\\\90\\\\904\\\\9044\\\\90443178\\\\5_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"STRIMMIG","price":66,"artNumber":"90443178","cartConfirmRemove":false},{"id":55,"src":"/images/8\\\\80\\\\804\\\\8042\\\\80422713\\\\4_600w.jpg","src_set":"/images/8\\\\80\\\\804\\\\8042\\\\80422713\\\\4_600w.jpg 600w,/images/8\\\\80\\\\804\\\\8042\\\\80422713\\\\4_500w.jpg 500w,/images/8\\\\80\\\\804\\\\8042\\\\80422713\\\\4_400w.jpg 400w,/images/8\\\\80\\\\804\\\\8042\\\\80422713\\\\4_300w.jpg 300w,/images/8\\\\80\\\\804\\\\8042\\\\80422713\\\\4_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"FÖRNYAD","price":415,"artNumber":"80422713","cartConfirmRemove":false},{"id":56,"src":"/images/5\\\\50\\\\504\\\\5044\\\\50443175\\\\2_600w.jpg","src_set":"/images/5\\\\50\\\\504\\\\5044\\\\50443175\\\\2_600w.jpg 600w,/images/5\\\\50\\\\504\\\\5044\\\\50443175\\\\2_500w.jpg 500w,/images/5\\\\50\\\\504\\\\5044\\\\50443175\\\\2_400w.jpg 400w,/images/5\\\\50\\\\504\\\\5044\\\\50443175\\\\2_300w.jpg 300w,/images/5\\\\50\\\\504\\\\5044\\\\50443175\\\\2_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"STRIMMIG","price":65,"artNumber":"50443175","cartConfirmRemove":false},{"id":57,"src":"/images/4\\\\40\\\\404\\\\4044\\\\40443190\\\\2_600w.jpg","src_set":"/images/4\\\\40\\\\404\\\\4044\\\\40443190\\\\2_600w.jpg 600w,/images/4\\\\40\\\\404\\\\4044\\\\40443190\\\\2_500w.jpg 500w,/images/4\\\\40\\\\404\\\\4044\\\\40443190\\\\2_400w.jpg 400w,/images/4\\\\40\\\\404\\\\4044\\\\40443190\\\\2_300w.jpg 300w,/images/4\\\\40\\\\404\\\\4044\\\\40443190\\\\2_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"STRIMMIG","price":65,"artNumber":"40443190","cartConfirmRemove":false},{"id":58,"src":"/images/4\\\\40\\\\404\\\\4042\\\\40426379\\\\2_600w.jpg","src_set":"/images/4\\\\40\\\\404\\\\4042\\\\40426379\\\\2_600w.jpg 600w,/images/4\\\\40\\\\404\\\\4042\\\\40426379\\\\2_500w.jpg 500w,/images/4\\\\40\\\\404\\\\4042\\\\40426379\\\\2_400w.jpg 400w,/images/4\\\\40\\\\404\\\\4042\\\\40426379\\\\2_300w.jpg 300w,/images/4\\\\40\\\\404\\\\4042\\\\40426379\\\\2_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"STRIMMIG","price":66,"artNumber":"40426379","cartConfirmRemove":false},{"id":59,"src":"/images/2\\\\20\\\\204\\\\2043\\\\20439009\\\\1_600w.jpg","src_set":"/images/2\\\\20\\\\204\\\\2043\\\\20439009\\\\1_600w.jpg 600w,/images/2\\\\20\\\\204\\\\2043\\\\20439009\\\\1_500w.jpg 500w,/images/2\\\\20\\\\204\\\\2043\\\\20439009\\\\1_400w.jpg 400w,/images/2\\\\20\\\\204\\\\2043\\\\20439009\\\\1_300w.jpg 300w,/images/2\\\\20\\\\204\\\\2043\\\\20439009\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"DRÖMBILD","price":204,"artNumber":"20439009","cartConfirmRemove":false},{"id":60,"src":"/images/7\\\\70\\\\704\\\\7042\\\\70428904\\\\1_600w.jpg","src_set":"/images/7\\\\70\\\\704\\\\7042\\\\70428904\\\\1_600w.jpg 600w,/images/7\\\\70\\\\704\\\\7042\\\\70428904\\\\1_500w.jpg 500w,/images/7\\\\70\\\\704\\\\7042\\\\70428904\\\\1_400w.jpg 400w,/images/7\\\\70\\\\704\\\\7042\\\\70428904\\\\1_300w.jpg 300w,/images/7\\\\70\\\\704\\\\7042\\\\70428904\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"EKET","price":439,"artNumber":"70428904","cartConfirmRemove":false},{"id":61,"src":"/images/0\\\\00\\\\004\\\\0041\\\\00410083\\\\1_600w.jpg","src_set":"/images/0\\\\00\\\\004\\\\0041\\\\00410083\\\\1_600w.jpg 600w,/images/0\\\\00\\\\004\\\\0041\\\\00410083\\\\1_500w.jpg 500w,/images/0\\\\00\\\\004\\\\0041\\\\00410083\\\\1_400w.jpg 400w,/images/0\\\\00\\\\004\\\\0041\\\\00410083\\\\1_300w.jpg 300w,/images/0\\\\00\\\\004\\\\0041\\\\00410083\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"STRÅFLY","price":118,"artNumber":"00410083","cartConfirmRemove":false},{"id":62,"src":"/images/5\\\\50\\\\503\\\\5035\\\\50357728\\\\2_600w.jpg","src_set":"/images/5\\\\50\\\\503\\\\5035\\\\50357728\\\\2_600w.jpg 600w,/images/5\\\\50\\\\503\\\\5035\\\\50357728\\\\2_500w.jpg 500w,/images/5\\\\50\\\\503\\\\5035\\\\50357728\\\\2_400w.jpg 400w,/images/5\\\\50\\\\503\\\\5035\\\\50357728\\\\2_300w.jpg 300w,/images/5\\\\50\\\\503\\\\5035\\\\50357728\\\\2_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"GRUPPERA","price":80,"artNumber":"50357728","cartConfirmRemove":false},{"id":63,"src":"/images/1\\\\10\\\\104\\\\1042\\\\10428488\\\\1_600w.jpg","src_set":"/images/1\\\\10\\\\104\\\\1042\\\\10428488\\\\1_600w.jpg 600w,/images/1\\\\10\\\\104\\\\1042\\\\10428488\\\\1_500w.jpg 500w,/images/1\\\\10\\\\104\\\\1042\\\\10428488\\\\1_400w.jpg 400w,/images/1\\\\10\\\\104\\\\1042\\\\10428488\\\\1_300w.jpg 300w,/images/1\\\\10\\\\104\\\\1042\\\\10428488\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"FÖRNUFT","price":80,"artNumber":"10428488","cartConfirmRemove":false},{"id":64,"src":"/images/4\\\\40\\\\404\\\\4045\\\\40450185\\\\2_600w.jpg","src_set":"/images/4\\\\40\\\\404\\\\4045\\\\40450185\\\\2_600w.jpg 600w,/images/4\\\\40\\\\404\\\\4045\\\\40450185\\\\2_500w.jpg 500w,/images/4\\\\40\\\\404\\\\4045\\\\40450185\\\\2_400w.jpg 400w,/images/4\\\\40\\\\404\\\\4045\\\\40450185\\\\2_300w.jpg 300w,/images/4\\\\40\\\\404\\\\4045\\\\40450185\\\\2_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"TILLSYN","price":199,"artNumber":"40450185","cartConfirmRemove":false},{"id":65,"src":"/images/7\\\\70\\\\704\\\\7044\\\\70443495\\\\1_600w.jpg","src_set":"/images/7\\\\70\\\\704\\\\7044\\\\70443495\\\\1_600w.jpg 600w,/images/7\\\\70\\\\704\\\\7044\\\\70443495\\\\1_500w.jpg 500w,/images/7\\\\70\\\\704\\\\7044\\\\70443495\\\\1_400w.jpg 400w,/images/7\\\\70\\\\704\\\\7044\\\\70443495\\\\1_300w.jpg 300w,/images/7\\\\70\\\\704\\\\7044\\\\70443495\\\\1_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"SMALSTÄKRA","price":635,"artNumber":"70443495","cartConfirmRemove":false},{"id":66,"src":"/images/2\\\\20\\\\204\\\\2044\\\\20440362\\\\2_600w.jpg","src_set":"/images/2\\\\20\\\\204\\\\2044\\\\20440362\\\\2_600w.jpg 600w,/images/2\\\\20\\\\204\\\\2044\\\\20440362\\\\2_500w.jpg 500w,/images/2\\\\20\\\\204\\\\2044\\\\20440362\\\\2_400w.jpg 400w,/images/2\\\\20\\\\204\\\\2044\\\\20440362\\\\2_300w.jpg 300w,/images/2\\\\20\\\\204\\\\2044\\\\20440362\\\\2_240w.jpg 240w","sizes":"(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw","originalName":"SVENSÅS","price":326,"artNumber":"20440362","cartConfirmRemove":false}]'),
      }
    },
    methods: {
        formatProductPrice(price) {
            return Number(price);
        },
        convertProductArray(element) {
            let src = "";
            let src_set = "";
            let sizes = "(max-width: 758px) 33vw,(max-width: 500px) 50vw, 25vw";
            if (element.hasOwnProperty("images") && element.images.length) {
                let image = element.images[0];

                if (image.hasOwnProperty("resolutions") && image.resolutions.length) {
                    let resolutions = image.resolutions.split(",");
                    let srcList = [];

                    src = "/images/" + image.path + image.fileName + "_" + resolutions[0] + ".jpg";
                    resolutions.forEach((resolution) => {
                        srcList.push("/images/" + image.path + image.fileName + "_" + resolution + ".jpg " + resolution);
                    });
                    src_set = srcList.join(",");
                }
            }

            if (!src) {
                src = "/static/img/placeholders/placeholder1.svg";
                src_set = "";
                sizes = "";
            }

            return {
                "id": element.id,
                "src": src,
                "src_set": src_set,
                "sizes": sizes,
                "originalName": element.originalName,
                "shortDescription": element.shortDescription,
                "oldPrice": element.oldPrice,
                "price": element.price,
                "artNumber": element.artNumber,
                "quantity": element.quantity,
                "cartConfirmRemove": false,
            };
        },
        addToCart(productId, quantity = 1) {
            event.preventDefault();
            let productObj = {
                "action": "ADD",
                "productId": productId,
                "quantity": quantity
            };

            this.$http.post("/cart/item", JSON.stringify(productObj)).then((response, status, request) => {
                if (response.data) {
                    this.cartCount = this.getCartCount();
                    window.location.href = "/cart";
                }
            }, () => {
                console.log('failed');
            });
        },
        getCartCount() {
            this.$http.get("/cart/item/quantity").then((response, status, request) => {
                this.cartCount = response.data;
            }, () => {
                console.log('failed');
            });
        },
    },
    mounted() {

    }
};

export default catalog;