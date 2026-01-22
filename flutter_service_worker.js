'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "126e336aa6d795ed5922b956c1947a1b",
"version.json": "3ba6fd246d0ece0bd850eee495b52efa",
"splash/img/light-background.png": "31263507840197dc7abcc6db9ca2bd14",
"splash/img/icon_logo.png": "d20b1bb981901eee65c18387dd98c08b",
"splash/img/dark-background.png": "31263507840197dc7abcc6db9ca2bd14",
"index.html": "b0e57ea2d80de4dd6b7d44b26bdc05a0",
"/": "b0e57ea2d80de4dd6b7d44b26bdc05a0",
"main.dart.js": "d6c7e5d1a90a223294c00b1fd47a89d4",
".well-known/apple-app-site-association": "ce2e3cac54fc70cab99364cc143c2ad1",
".well-known/assetlinks.json": "378c558487351719ef0f343b53683c57",
"Web.config": "51998a27bbd7487b093c618da04bbb80",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "953de66ec6aa97275f82dfb6f8d17d1a",
"icons/Icon-192.png": "c08ff71bc9587deb80e0d106367943b5",
"icons/Icon-maskable-192.png": "c08ff71bc9587deb80e0d106367943b5",
"icons/Icon-maskable-512.png": "45f93b9b51ec4227d10ba00b948a4d86",
"icons/Icon-512.png": "45f93b9b51ec4227d10ba00b948a4d86",
"manifest.json": "47ac168acb89a8be46d59017a98c2647",
"assets/shorebird.yaml": "0f7698aab37e98fb58db7e807ef6ccc9",
"assets/AssetManifest.json": "6cc264c92c89278685b19055bf43d531",
"assets/NOTICES": "9ddb7e6dad9b4f914a7243c9e902f123",
"assets/FontManifest.json": "f8068c3f076e95864c186e111718ef7b",
"assets/AssetManifest.bin.json": "2f91a81e99eb6dddf730079453fe1eab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d2f82888c258985a3052ef3c50ca4484",
"assets/fonts/MaterialIcons-Regular.otf": "8004b4fdd506378dfcbc16aeba0ffa3d",
"assets/assets/images/img_login.png": "992212c5407b08dfb6c95e1b8e8f576a",
"assets/assets/images/img_banner_register.png": "7d13ab29a32a69c75e27a061cc6f78f3",
"assets/assets/images/im_empty_box.png": "f6462097028394cf90bb5bd827100d2d",
"assets/assets/images/im_background_atheletics.png": "014c37a34b5e26d415b5012467684735",
"assets/assets/images/img_football_court.png": "5b8fad20550873a0e30ca6806ea6d16b",
"assets/assets/images/img_avatar_default.png": "1af257df7486494dc43ef6e99dc5e9db",
"assets/assets/images/img_volleyball_court.png": "67e45eef1669b089c6628a0f38d8d9cf",
"assets/assets/images/img_header.png": "7fcb9fab7efbe55ea67fb62dae8aa0c5",
"assets/assets/images/img_over_hour.png": "9710d3891c4bae6ae177d0851483eaef",
"assets/assets/images/img_warning.png": "baa417b64014a75c3f8f42e4ace80553",
"assets/assets/images/img_pickleball_court.png": "9d04843633f4f2a9e0ac2b4fe4ed6ad6",
"assets/assets/images/img_zalo.png": "391b055bafc75b0d822b2fb0eb66770a",
"assets/assets/images/img_home_header_clear.png": "b75461c7925e25d1a2f3299cefad13a8",
"assets/assets/images/img_tennis_court.png": "5036badf1314a935a5ebb9fe4032b0cb",
"assets/assets/images/img_padel_court.png": "d06a4f8f97cb790a7929a74f9988ed90",
"assets/assets/images/img_combine_court.png": "fbe083f2c71ce6bdcf4d9b3c309952e2",
"assets/assets/images/img_login_2.png": "2d24a159086f196d417328bea72475dc",
"assets/assets/images/im_splash.png": "21f6bdc4fd94fde54eb308b03f898b02",
"assets/assets/images/image_payment_success.png": "845a5df0dd6b1dba40a5baefb9d32e42",
"assets/assets/images/im_user_avatar1.jpg": "e0f2fec7284735c981162620574eff0a",
"assets/assets/images/img_forgot_password.png": "0b9bebc075a6e0e526ee52167e477ef9",
"assets/assets/images/im_user_avatar3.jpg": "76e8257464a7e6c1f706258b46d001b8",
"assets/assets/images/im_user_avatar2.jpg": "19f9865323d5db0c1813a7edcc6c3895",
"assets/assets/images/img_default.png": "a670f869eb506aea5496caf33686a9c6",
"assets/assets/images/backgroun_service.png": "e6e34f4c9bc0a8da3b3bbd060685608f",
"assets/assets/images/im_bg_branch.png": "231e18f7ac6669709cbf411ec8057f8f",
"assets/assets/images/img_table_ennis_court.png": "1a9768891d0fa35006ae928a6c27611e",
"assets/assets/images/img_baskeball_court.png": "860dc0dc04111234a291be2885ed7c27",
"assets/assets/images/icon_app.png": "0c21a7b561c01c25747a34aeb1d9897b",
"assets/assets/images/img_badmintion_court.png": "9b21a80c5e66555a65da95dd6807f0a0",
"assets/assets/images/img_golf_court.png": "d38688c2183e46234ad1eb3891ef74bc",
"assets/assets/images/img_home_header.png": "2feae64631e640daa7a794b2ffab7fba",
"assets/assets/images/im_bg_field.png": "e6e34f4c9bc0a8da3b3bbd060685608f",
"assets/assets/icons/ic_phone.svg": "e8fa3c07a4a7b4d58322178e3daa5c31",
"assets/assets/icons/ic_upload_image.svg": "a88a717acd65f1d5d5d78c024e5c5edc",
"assets/assets/icons/ic_uu_dai.svg": "d568006400508cfb089a90720ede4c03",
"assets/assets/icons/ic_avt_football.svg": "22b99f9e74554481b4d3b0c2fc306ab2",
"assets/assets/icons/ic_thong_tin_khach.svg": "c1ab113cb876ec8fb3464f2ede783e1c",
"assets/assets/icons/ic_clock.svg": "eba9713aedf85505899c7709fdfec21e",
"assets/assets/icons/ic_table_tennis.svg": "b4ba6622a7165ea644dc48af044920e0",
"assets/assets/icons/ic_calendar3.svg": "0008e866982c20f46330b432a67a7298",
"assets/assets/icons/ic_filter.svg": "be40db46ac047c985a0511695bc7f785",
"assets/assets/icons/ic_pencil_fill.svg": "f2b3f285fc5d154b750c1a59aa194df9",
"assets/assets/icons/ic_calendar2.svg": "976da85170729db07edf2fce3bc35487",
"assets/assets/icons/ic_user_list.svg": "7463e579288a0982434807e93ae50b43",
"assets/assets/icons/ic_buy_ticket.svg": "f16920d58fa333f4eff6d2f2f7a2f825",
"assets/assets/icons/ic_avt_basketball.svg": "4ac52e5bd065f6a1d8c0b9a18d5ccbd1",
"assets/assets/icons/ic_goi_nhan_vien.svg": "b518224af1587ba52a247029259662c7",
"assets/assets/icons/ic_image_files.svg": "7e9c3408bce9b6e3f42cabae1fa08173",
"assets/assets/icons/ic_profile.svg": "4741bf06aaa9595bf28699d94cf243fa",
"assets/assets/icons/ic_map_point.svg": "86220e144264c16125f31d4bdd68c8ff",
"assets/assets/icons/ic_sms.svg": "1268cb6742ecc19fae1f6ee1385d10a7",
"assets/assets/icons/ic_profile2.svg": "677c0f33399cdd302f8cca80f8fae998",
"assets/assets/icons/ic_voucher.svg": "e48a4000ed60c27d6b3478ab47a810df",
"assets/assets/icons/ic_MapTrifold.svg": "160d1aa6968cb40dfe1abe85d3b6321e",
"assets/assets/icons/ic_home_outline.svg": "011b6a2da1856a186d56189e742f585f",
"assets/assets/icons/ic_volume_line.svg": "1be2ff756179a0212418bdc8e9d0ff00",
"assets/assets/icons/ic_avt_padel.svg": "e84f9095dd7a4e3c1d53968c2f52c645",
"assets/assets/icons/ic_sandglass_line.svg": "3b1acedaf0247ac8208bf5eaaf2d6918",
"assets/assets/icons/ic_delete.svg": "3abafc10c9b908dc105d85b8c5e5ac36",
"assets/assets/icons/ic_success.svg": "bff27aa33374183a610ec8f0d437cb46",
"assets/assets/icons/ic_x.svg": "e4a4b97ee6de631ee409d00d068fa1b9",
"assets/assets/icons/ic_calendar_2_line.svg": "2c88587032c2a947604d6b78c9849341",
"assets/assets/icons/ic_plus.svg": "51333c684f7afd337166ec68c607fef1",
"assets/assets/icons/ic_map_pin_line.svg": "409276201b9d4dc0574fe40ca3c95303",
"assets/assets/icons/ic_monitor.svg": "ecc04a75c1e7f37f91875d69591205e9",
"assets/assets/icons/ic_phone_call.svg": "d54fcdc74ede12374eef115ce5c6d716",
"assets/assets/icons/ic_avatar.svg": "ca9c0a31bdd429b2418c93a41a4e4965",
"assets/assets/icons/ic_box_line.svg": "a6436716c449f7f598272637b8b99ab2",
"assets/assets/icons/ic_world_2_line.svg": "313a9025b496321078beb099465fc734",
"assets/assets/icons/ic_minus.svg": "d3dc02dbfc0320b3a9a30917122ba670",
"assets/assets/icons/ic_radio_choose.svg": "15ba50e9b7e177c618379e5312254d26",
"assets/assets/icons/ic_menu2.svg": "45289c0ebc64bf6725eef177d4553dc3",
"assets/assets/icons/ic_danh_gia.svg": "04b220b30c71d8287fb4db9bf69b002e",
"assets/assets/icons/ic_info_circle2.svg": "703bc2721a780a7d2aabbe21507ce50c",
"assets/assets/icons/ic_apple.svg": "356213e3a9f31e9d55931debbd804c6f",
"assets/assets/icons/ic_qr.svg": "db39efc9f2ad5373ce09938391ddeb6f",
"assets/assets/icons/ic_heart.svg": "d84cd551c9c27c30a9237e05f3fc6e3d",
"assets/assets/icons/ic_information_fill.svg": "94f32bde3588dc999f038530854ca03e",
"assets/assets/icons/ic_danger2.svg": "fb5c6db2110ff5badb112d0e33a01c44",
"assets/assets/icons/ic_location.svg": "2dbe012fdfa17ecbf4533b64c9e53ab4",
"assets/assets/icons/ic_home.svg": "ecad1ccd397a9c66ee277699f4786da8",
"assets/assets/icons/ic_close.svg": "386e14e632aae21b871771e0ef4afb5d",
"assets/assets/icons/ic_user.svg": "2cb663aadc1f6f744c33eabddda645ca",
"assets/assets/icons/ic_japan.svg": "3e3e9b7ccd3716c99eb3d4493c01ecbd",
"assets/assets/icons/ic_dat_lich_xe_ve.svg": "fc1e84c10926604031b69438a2f27b72",
"assets/assets/icons/ic_delete_account.svg": "14c95817838b860d7f0d87d754055795",
"assets/assets/icons/ic_phone_line.svg": "b3530ff9045e7a217c119d24958a8fd4",
"assets/assets/icons/ic_football.svg": "89b281ff32c4f6e7f96d2e94a8f18d7a",
"assets/assets/icons/ic_avt_pickleball.svg": "fcb8a89b2b89599c6db0cd8f83e166b9",
"assets/assets/icons/ic_radio_unselect.svg": "2cbc10689ecb9a94d7d780718af11218",
"assets/assets/icons/ic_tournament_outline.svg": "6523656da043366dc83fb5dcf9238b28",
"assets/assets/icons/ic_vietnam.svg": "25a7228bc50b6441aeb1403f31a215cf",
"assets/assets/icons/ic_notification.svg": "e55c736f8e09627258945663bf33b46d",
"assets/assets/icons/ic_like.svg": "8fe32156d913ab934b6d329a05e7a686",
"assets/assets/icons/ic_volleyball.svg": "427a742766b7021669ad7ac972532f7d",
"assets/assets/icons/ic_voucher_default.svg": "82aab485e4dc4790fc19545ae9e4df26",
"assets/assets/icons/ic_thong_tin_san.svg": "645888c9242b6e6e2833a21aeee30d98",
"assets/assets/icons/ic_leading.svg": "72d7e9294e09eb0dfd2741fb652047b6",
"assets/assets/icons/ic_gift_fill.svg": "4cce612402e13d8934e8e13cf286a55f",
"assets/assets/icons/ic_communication.svg": "d69c985690d8c38f59cbb3e7c63f4558",
"assets/assets/icons/ic_IDcard_line.svg": "8c332ceed82ad4d3b52f89889958eb88",
"assets/assets/icons/ic_pencil.svg": "dcfd40eeacceb2fd25366bceb0e43fd3",
"assets/assets/icons/ic_password.svg": "970bb52a7b3c44ffa54c32c4a73308d1",
"assets/assets/icons/ic_receive_money_line.svg": "914129bf1509042fff590ee4e1f5fce1",
"assets/assets/icons/ic_share_forward_line.svg": "605b9c749867ab643db835e46d0f035f",
"assets/assets/icons/ic_arrow_left.svg": "c6fce4289e5061d169a1d7b0a9630319",
"assets/assets/icons/ic_arrow_bottom.svg": "74385331974549f112dd4517b07e118c",
"assets/assets/icons/ic_danger.svg": "90c84263ff3b6d9ab0c2659505a41bb5",
"assets/assets/icons/ic_star_outline.svg": "ac997b9c0d0522fb5ef77a926f55ba85",
"assets/assets/icons/ic_information_line.svg": "705cfc641a972416d8b6c996c7ce4854",
"assets/assets/icons/ic_service_booking.svg": "036fa70e95d5248f09a8234c77cc6d13",
"assets/assets/icons/ic_task_2_line.svg": "ebf3377fd1105fd5a405edda645578a9",
"assets/assets/icons/ic_arrow_right.svg": "eecd0f1a586e46b033d4b497c5dd3b6c",
"assets/assets/icons/ic_avt_badmintion.svg": "0fd26575d788438671ab7628bf93318c",
"assets/assets/icons/ic_infor_contract.svg": "8831b47ab603c7d8da9c2dd7e0ed9dda",
"assets/assets/icons/ic_link_dat_san.svg": "e05c2e62865daca8b89a04505ca71b5b",
"assets/assets/icons/ic_heart_line.svg": "770842b705f9b532eb78457edf6664d8",
"assets/assets/icons/ic_close_line.svg": "2f10fae1f9094dba74e9261278485740",
"assets/assets/icons/ic_combine.svg": "d9d1ce096d02a613f94942b3c3b6026b",
"assets/assets/icons/ic_google.svg": "345e4759a3c2a9afc76cfb9c19dfa2b5",
"assets/assets/icons/ic_gallery.svg": "ec470651dfb2adaa18c41d85f02d73d0",
"assets/assets/icons/ic_new.svg": "12e0074ee0e19e6aa64b56d5eff07bfb",
"assets/assets/icons/ic_camera1.svg": "606c951676a5870dc642bc943a907f19",
"assets/assets/icons/ic_avt_tennis.svg": "909cef6be7c3e794cf0794687b034f74",
"assets/assets/icons/ic_tournament.svg": "58be834a136a0ce0f3d5cb0921ec4246",
"assets/assets/icons/ic_transfer.svg": "077c09974c97277be99d7a564db49111",
"assets/assets/icons/ic_store.svg": "ca806f27933c20d4fb4e4451a8194fb6",
"assets/assets/icons/ic_tableTennis.svg": "48a4d8f7b9edc07a09efd23048ff6571",
"assets/assets/icons/ic_radio_unchoose.svg": "1d00612d17b1ff1475dc432d3156e919",
"assets/assets/icons/ic_playground_fill.svg": "bd914616212d7a708ff3dce767fa617a",
"assets/assets/icons/ic_list_check_2_line.svg": "4230767599b4713095652562a9caa08b",
"assets/assets/icons/ic_note_book.svg": "5cedbd825daa86cd39251f8ec2869149",
"assets/assets/icons/ic_hide_password.svg": "f0610e100414798fb0ad22439518fa6e",
"assets/assets/icons/ic_copy2.svg": "e3448871139494db90f87295a2eb6e73",
"assets/assets/icons/ic_distance.svg": "313e996d50b71eadd497def2dce803dc",
"assets/assets/icons/ic_badmintion.svg": "3254bf7ee5fa8353b05e44c495ce2880",
"assets/assets/icons/ic_clock2.svg": "2aee51b9b7e26fe4316d0c05ff9469a6",
"assets/assets/icons/ic_location_line.svg": "7ba4b1b6cbcee4ae6dd0c907e85205f6",
"assets/assets/icons/ic_booking_session.svg": "86aa61dba6fb41bd6463a26f183b1b52",
"assets/assets/icons/ic_warning.svg": "75aeac296690a1073e37877eb5e96ba3",
"assets/assets/icons/ic_download_four.svg": "6c4fddf2337a7bef7802c5a0ef87c856",
"assets/assets/icons/ic_avt_volleyball.svg": "afb0fba8fb9b18b941e77d39f5860e28",
"assets/assets/icons/ic_ticket_line.svg": "f719314c92cb9546d0a00c187cd66091",
"assets/assets/icons/ic_calendar_line.svg": "aa7319d562c948473d169ef8055b26ff",
"assets/assets/icons/ic_food.svg": "d27440bf0fabb6a2b3a311194a141a36",
"assets/assets/icons/ic_location_outline.svg": "d6e7cb69314075f8f112f396ab05d77f",
"assets/assets/icons/ic_user_outline.svg": "c321dadb31d30dae0e638dcccb82ac5b",
"assets/assets/icons/ic_avt_combine.svg": "76a2459f439c3781ccc46f9b9c840def",
"assets/assets/icons/ic_check_line.svg": "dc0eff230b75bf673c1547a748eb8b30",
"assets/assets/icons/ic_booking.svg": "bd9f128728290ea55ad71661b4dec6e2",
"assets/assets/icons/icPassword2.svg": "f43255f7462f04a3aef56561ed44f3f5",
"assets/assets/icons/ic_user_search.svg": "509cd6189eb61361c6854ce5b806d012",
"assets/assets/icons/ic_arrow_top.svg": "c6c90a0333b6ddfed3b4d44797276f32",
"assets/assets/icons/ic_filter_home.svg": "237dca57faf39a2de95f334860d77474",
"assets/assets/icons/ic_pickleball.svg": "163427741ee1b772e41a6d30f36ccae3",
"assets/assets/icons/ic_dat_dich_vu.svg": "a0eeac34bb7da43155f00023a2659040",
"assets/assets/icons/ic_document_copy.svg": "6c1c2f1b24d232c78c41eb16add7109e",
"assets/assets/icons/ic_store_outline.svg": "7c0a658baf4a37daf9568a540068c2e2",
"assets/assets/icons/ic_account.svg": "ea52b3b05e57b42d40caa93490f68189",
"assets/assets/icons/ic_person.svg": "d8f57603b2f197977ddf42b6ebf32582",
"assets/assets/icons/ic_copy_2_line.svg": "f91f5d0272a6c85ab5fef411697a37dd",
"assets/assets/icons/ic_padel.svg": "f243f45fb67a6d4c9de6b3bac6089329",
"assets/assets/icons/ic_playground_line.svg": "a58725572b4b712a83ac932c44ecb94f",
"assets/assets/icons/ic_heart_outline.svg": "d8e8c873876aad76080d7dd553fedfc5",
"assets/assets/icons/ic_navigation_line.svg": "ce8e3e89e55b94761770bffeec0863fa",
"assets/assets/icons/ic_golf.svg": "356c2bf63fb2ca540269dd3e7846db0b",
"assets/assets/icons/ic_download_qr.svg": "2bf8190ca6c383c33efd82cd586abe1e",
"assets/assets/icons/ic_avt_golf.svg": "95b551650f51404458832a40452cd4ac",
"assets/assets/icons/ic_timer2.svg": "fe082d01b2c680de05b8a86ccc836b9d",
"assets/assets/icons/ic_currency_dollar_2_line.svg": "2cc8fd2cf4b03c471181de540e578e88",
"assets/assets/icons/ic_ticket_session.svg": "b1847669b21bf24a561502ddd4bf6e26",
"assets/assets/icons/ic_tennis.svg": "b797c865628e252aa5912abaa4fafbdc",
"assets/assets/icons/ic_schedule_booking_outline.svg": "b7bf7c31f27997faa5592bdbc952cfee",
"assets/assets/icons/ic_schedule_booking.svg": "a2ec8f3ef2946673449db1bee5f02505",
"assets/assets/icons/ic_copy.svg": "d36af82096d057f52166fe8c843324f8",
"assets/assets/icons/ic_banner_register.svg": "dc9305e9c8d0ccdc490df05ec967b609",
"assets/assets/icons/ic_note_pencil.svg": "157eae6627c7a1bfb9c942d8ecaa7510",
"assets/assets/icons/ic_dat_lich_ngay.svg": "00c4051e07040cb22ea3f036ceb78c5a",
"assets/assets/icons/ic_thong_tin.svg": "73e3ba3b7ddaf8eb647109814bb87d16",
"assets/assets/icons/ic_chart1.svg": "4bb02985ee0f3053d288266f26667501",
"assets/assets/icons/ic_infor_court.svg": "3ade7b0dbfd5e73b4bc48bcd19315fc6",
"assets/assets/icons/ic_search.svg": "0a01aa216aa52d7363216d23a057abd8",
"assets/assets/icons/ic_global_search.svg": "e8ec02a3f9b8ed1f4fade45a8fa29cf9",
"assets/assets/icons/ic_basketball.svg": "73b7352cdc6eb688addddd39a63b406b",
"assets/assets/icons/ic_language_square.svg": "ac7aa35c0d80df8b34f1ef7ce2091ad5",
"assets/assets/icons/ic_attention.svg": "1237c883cfc683c5ceba6d9205cebe0b",
"assets/assets/icons/icRotateLeft.svg": "01dd197906a1cb94ae19a5aee46354a9",
"assets/assets/icons/ic_time_line.svg": "d64e38c0f5b89900577c580ab9ab8ed0",
"assets/assets/icons/ic_delete%2520copy.svg": "3abafc10c9b908dc105d85b8c5e5ac36",
"assets/assets/icons/ic_england.svg": "1688c60a6007cae0b4154f4efff91bb8",
"assets/assets/icons/ic_radio_select.svg": "d449885b3d4fefa03b5dc8db8916f970",
"assets/assets/icons/ic_star.svg": "50494c1279fcc5faca38e8fb6c5e7279",
"assets/assets/icons/ic_ttsk_xe_ve.svg": "a8a86c3cc28751955eb355de3d0ca701",
"assets/assets/icons/ic_ticket.svg": "b8a21ac7b696dee704332ca0024aeebf",
"assets/assets/icons/ic_tiktok_line.svg": "219a0093d9a792432775f7854fb63e3b",
"assets/assets/icons/ic_logout.svg": "290edc506dee9b9887a8a850dfbeddb4",
"assets/assets/icons/ic_lich_dat2.svg": "fa6c29cd1f549a31a95b542cfe54cfc2",
"assets/assets/icons/ic_unhide_password.svg": "bd3ccd17652eb9b32afd3ba98ab81c13",
"assets/assets/icons/ic_avt_table_tennis.svg": "749776737b8776ab29dceed62d46e56e",
"assets/assets/icons/ic_booking_service_success.svg": "b1d307c8204f9c739db19c19c9ce0917",
"assets/assets/icons/ic_field_ticket.svg": "60b2229d59778c5d3a6af57cb3627d63",
"assets/assets/icons/ic_clear.svg": "06b35ade0d8440a9f7a2122c84088c5e",
"assets/assets/icons/ic_logout_new.svg": "21ef8983d2aaa0cf30e20df5c759f128",
"assets/assets/fonts/OverusedGrotesk-Medium.ttf": "1b502f7ede40c807e7b6bb8451af2601",
"assets/assets/fonts/OverusedGrotesk-Light.ttf": "b872277be7837fc3bb8a232fa82f4be1",
"assets/assets/fonts/OverusedGrotesk-Regular.ttf": "345e5e4523a07d3e18bf4518fae3db07",
"assets/assets/fonts/OverusedGrotesk-Bold.ttf": "68fa9b41e9222b0ceddc4ec835bf5ebd",
"assets/assets/fonts/OverusedGrotesk-SemiBold.ttf": "c9c9be4cf1843b6b438e3dc76a268c14",
"assets/assets/fonts/OverusedGrotesk-Italic.ttf": "a6f018e6c2f57781e8e3cba97b0a8cf2",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
