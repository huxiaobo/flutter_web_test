'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "178dfc7d357f9984491b07742ceb0064",
"assets/AssetManifest.json": "3fb436b6f5dbcf24cf682a317c81c4fb",
"assets/assets/images/account/account_autograph.png": "7bceb5632abe6eaf17dafc926c7e7219",
"assets/assets/images/account/account_btn_bg.png": "2ad2d7b840df8b22347afd0b5589f286",
"assets/assets/images/account/account_face_icon.png": "928eb2f6d62870c64126950242e3eb1b",
"assets/assets/images/account/account_icon_read.png": "315dac9dce343764242fb3d3af37bec4",
"assets/assets/images/account/account_icon_selected.png": "17498bb9abc16afd9517793f69379f33",
"assets/assets/images/account/account_icon_tip.png": "b717637bc511161239aefbee20a1eefa",
"assets/assets/images/account/account_icon_tip_night.png": "3e9a7c7202480426aa9d5b5a746b1838",
"assets/assets/images/account/account_icon_unread.png": "58c485dccd84a4cef4388381652e9797",
"assets/assets/images/account/account_icon_unselect.png": "f0200ec0082bd89d7486c0a304c01b9c",
"assets/assets/images/account/account_img_fail.png": "8a4e43a2afdb686e4d0871eed56a98b1",
"assets/assets/images/account/account_img_no_info.png": "0e3a778803542531869a0ca66cda34b4",
"assets/assets/images/account/account_img_risk.png": "28ef0e8f51a172e4b94a62f32d2e12ac",
"assets/assets/images/account/account_img_success.png": "98b3b6263a8867496d68296cffba35c6",
"assets/assets/images/account/account_img_unpass.png": "09495ec0205908d1220dcb535f83eb69",
"assets/assets/images/account/account_img_wait.png": "da8520d389a1f9a55c5f5fa6510c30b0",
"assets/assets/images/account/account_normal_1.png": "dcad4b7059a3025eae311a94d55484c8",
"assets/assets/images/account/account_normal_2.png": "283fc7caddf2f5237f9db454afec8383",
"assets/assets/images/account/account_normal_3.png": "af112c0ac4d8eaf1be4934555bb6376b",
"assets/assets/images/account/account_riskdisclosure.png": "fd7f661fe06b7b4899e910cdf3eb41e5",
"assets/assets/images/account/account_select_1.png": "5c2669dcc14528a72af643089de1d9fb",
"assets/assets/images/account/account_select_2.png": "cdbdd9c04ef20fc2ab6f743f22191526",
"assets/assets/images/account/account_select_3.png": "3fdeeef408030ef43d9ce0b1b700b8a6",
"assets/assets/images/account/account_select_4.png": "76990fb08673699ddae631fb2dec2c21",
"assets/assets/images/account/account_yuan_select.png": "d1e5ecf7ca0f8a49ebf34e86d8e3cf4a",
"assets/assets/images/account/account_yuan_unselect.png": "f91976d05172f04e729faeb3bb929b92",
"assets/assets/images/account/cycle_sign.png": "a09afcedb9365ae5abcc5f98f15d55fc",
"assets/assets/images/account/finance_btn_bg.png": "4cceb5429611deb02816e11bdbb0f6cc",
"assets/assets/images/account/id_1.png": "b16d50b86f0bb5ca8509beefc0849eda",
"assets/assets/images/account/id_2.png": "49dd86299acdb5f2c63f0b358ca4da8e",
"assets/assets/images/account/id_3.png": "0c26337556ce62a4ac2f11e9f9d872d4",
"assets/assets/images/account/id_4.png": "ed3e8f80b8bacf9c111b0118eb8e0e88",
"assets/assets/images/account/login_icon_account.png": "0674c5abd0b709bcab15bf201592fb14",
"assets/assets/images/account/login_icon_close.png": "5e25287c30e6da219dd8b03bada368bf",
"assets/assets/images/account/login_icon_close_night.png": "a3dbc659ac0ddbbe433337dd70e40459",
"assets/assets/images/account/login_icon_email.png": "0073a7337f4b8a3769f4eb379267a3e7",
"assets/assets/images/account/login_icon_invisible.png": "e630f96e46de6b842537803173ce5cbe",
"assets/assets/images/account/login_icon_password.png": "7074fbaa30db968fc5b6abfd54642b5f",
"assets/assets/images/account/login_icon_verification.png": "44c4c24b00af8e5d92080cf8233b376d",
"assets/assets/images/account/login_icon_visible.png": "6ebd765b28811346515e833babb55de7",
"assets/assets/images/account/logo.png": "4817807022a41a1d28cb8f6309e68214",
"assets/assets/images/account/nav_icon_return.png": "515c7be64470509fc4eac601faae9cca",
"assets/assets/images/account/nav_icon_return_night.png": "e047ff6e2de94f4a2b026fa91b068558",
"assets/assets/images/account/news_icon_new.png": "f14e4f6a05dd17b215864a5b19af8267",
"assets/assets/images/account/notice_bg.png": "cf145f10999c8400b2388a3a156ab880",
"assets/assets/images/account/open_risk.png": "01ffe7417e67c2e094444d2257b689b2",
"assets/assets/images/account/passport_1.png": "e3a8dbb825ed06a6a6c98345c53e6630",
"assets/assets/images/account/passport_2.png": "b888b2bd274fd82963e1113ded3b7acf",
"assets/assets/images/account/passport_3.png": "7d7e102e0942db0656641d55e8a83edf",
"assets/assets/images/account/passport_4.png": "67f6874ca1941adf65830672bf3ae3fd",
"assets/assets/images/account/quick_face.png": "d7f8e9cf01e63dab67927c3671ec44ac",
"assets/assets/images/account/riskRateTip.png": "eb7923347a28a8e5a02103710a5963e4",
"assets/assets/images/account/riskRateTip_english.png": "13d5355398dcacecfd12ef26338a45b6",
"assets/assets/images/account/riskRateTip_night.png": "14dcd4ebe6627b3161cc889eb2c409cb",
"assets/assets/images/account/risk_normal_1.png": "5f30cd3cc055678573f33e26c9204eb0",
"assets/assets/images/account/risk_normal_2.png": "2810fa02cb6ef6cb629377381a74d34d",
"assets/assets/images/account/risk_normal_3.png": "7608588aa104b036536affeb7b8206f3",
"assets/assets/images/account/risk_select_1.png": "d6bc82401c1b89c1f688e7d74dce8e06",
"assets/assets/images/account/risk_select_2.png": "bf3263472a0575ed014f74db6472a134",
"assets/assets/images/account/risk_select_3.png": "d822b946ef90815dc7234b8e6a038fa3",
"assets/assets/images/account/risk_select_4.png": "1daca9d74a798f7505b1361b2abc58fb",
"assets/assets/images/account/tips_icon_close.png": "0a3c9b5d0d4f225902fa41d54e34b16f",
"assets/assets/images/account/tips_icon_more.png": "f0ead58338ff57e64604f365180e8623",
"assets/assets/images/account/tips_icon_more_night.png": "859baddf6b2651ae93d26c385af4ed39",
"assets/assets/images/common/defaultpage_finance_norecord.png": "bb6f852407ce060aedc5d93b2143acec",
"assets/assets/images/common/defaultpage_finance_norecord_night.png": "f6ed7627a106f454705e6bc36e03d648",
"assets/assets/images/common/defaultpage_nomessage.png": "28aa98e0fb5f48cb515b846436d4fcc0",
"assets/assets/images/common/defaultpage_nomessage_night.png": "fdb64e78ceee2662dac6f2ec974f7a70",
"assets/assets/images/common/defaultpage_norecord.png": "b9b9c8841a0e105bb5bbe48a9b0dfa31",
"assets/assets/images/common/defaultpage_norecord_night.png": "32a23f839a03749a877c63db9610ba47",
"assets/assets/images/common/defaultpage_optional.png": "7a4f927305b8f3e1450969b25c3df694",
"assets/assets/images/common/defaultpage_optional_night.png": "0b1222f4aa834955673f6236a4074db3",
"assets/assets/images/common/defaultpage_recharge.png": "c5921c21c69f6d3f72e17422e5696470",
"assets/assets/images/common/defaultpage_recharge_night.png": "3613564c0050ad101b7298dd16c2a5bc",
"assets/assets/images/common/defaultpage_search.png": "1bd7c797ca9770a92390dbb6b4a5316e",
"assets/assets/images/common/defaultpage_search_night.png": "8f1967fbf3bf8010859878dbe9b5705f",
"assets/assets/images/common/detailed_icon_screen.png": "e48a02a7b9a385bd9bb81c8ac2b0d9df",
"assets/assets/images/common/detailed_icon_screen_night.png": "0f0d9308231ac8e887faba9ebdeb3ab3",
"assets/assets/images/common/dropdown_icon.png": "b1ef18bf8763db291b6bae28792db2b9",
"assets/assets/images/common/edit_icon_clear.png": "a493402a4709abc58bc872894673eb0d",
"assets/assets/images/common/list_icon_close.png": "785ddeed11efac4ef128ef5210ce3bed",
"assets/assets/images/common/list_icon_close_night.png": "b73cab4f9a853e3c196ab53ab6e9d810",
"assets/assets/images/common/list_icon_more.png": "584989c0dccaa8be545092e49968a907",
"assets/assets/images/common/list_icon_more_night.png": "13d29d458cbf5e7cc4ee1b5beb99642d",
"assets/assets/images/common/list_icon_more_small.png": "f8de30c2305e66265725f0320704ab32",
"assets/assets/images/common/list_icon_retract_small.png": "c7a55f1b90d56081e15e47ac2c9a9cd1",
"assets/assets/images/common/list_icon_unable.png": "9ffeb5e6fa828a513f4449037f1624e0",
"assets/assets/images/common/nav_icon_news.png": "e4ba67d398a3673d1cf28b451868ecc1",
"assets/assets/images/common/nav_icon_news_night.png": "5c47622eced39736ce9db6c29aba0f69",
"assets/assets/images/common/nav_icon_search.png": "9ea3e3a9fe0b93e94baacd9036c81a94",
"assets/assets/images/common/nav_icon_search_night.png": "9565aa82b8b7d60b8e9c68ed9a7c5eef",
"assets/assets/images/common/yes_icon_selected.png": "8020bd6cf3d4445fd2b94a0c9bd65f48",
"assets/assets/images/home/bg_guide_in.png": "23a45c70cfabcf6b4745c93acf16dfb7",
"assets/assets/images/home/guide_one_pic.png": "facc9958bd223b08cfd0eb2e2c827be3",
"assets/assets/images/home/guide_one_text.png": "987e0571dd5e01eebf01a1ab95e98fbd",
"assets/assets/images/home/guide_three_pic.png": "6d1fd1b6b852befad8d004bde5079be2",
"assets/assets/images/home/guide_three_text.png": "2b32c8e9d22eed9132d05df91b26d541",
"assets/assets/images/home/guide_two_pic.png": "08a7f9c1564417c1b96030d185acfbf3",
"assets/assets/images/home/guide_two_text.png": "ff8c66aa0f944bcb01a1d93f17c4237d",
"assets/assets/images/home/img_chicang.png": "37e9057ad2b7d858af8863e7ea7a2a5d",
"assets/assets/images/home/img_fullk_btn_bg.png": "37c0a7df5e565bf9c47dd623cbfe1517",
"assets/assets/images/home/img_fullk_btn_bg_night.png": "5f5ee3f345736529f79a4fde1546d570",
"assets/assets/images/home/img_hangqing.png": "d8d465ed7040d42066b5f9715a58bd12",
"assets/assets/images/home/img_zhixuan.png": "65172011d1d71b5ea3aaaf72e616a1ab",
"assets/assets/images/home/kline_icon_left.png": "8b805bbabe12a59041d0c9583ceec5f8",
"assets/assets/images/home/kline_icon_more.png": "f3efb3b1dd458dc66b554a493c976e4a",
"assets/assets/images/home/kline_icon_optional.png": "2c70ca09a157d538260defe76d313888",
"assets/assets/images/home/kline_icon_positions.png": "ded633edecc80b63a66cd11dee26c3e4",
"assets/assets/images/home/kline_icon_quotation.png": "904c7e4e3ccd3e83d267b1b5cb009dca",
"assets/assets/images/home/kline_icon_right.png": "33f88472bee8c6264d1ef5ab0312e33c",
"assets/assets/images/home/nav_icon_optional_normal.png": "5828e0f509611b3d86398cbcee578a81",
"assets/assets/images/home/nav_icon_optional_normal_night.png": "f21386dad1f8718b832732da29dc0ecc",
"assets/assets/images/home/nav_icon_optional_selected.png": "104ed5de67338c617ff4a168c2759dd1",
"assets/assets/images/home/nav_icon_optional_selected_night.png": "b17dc34d7ec0cd3ec498447ccdfe3a80",
"assets/assets/images/home/search_icon_delete.png": "f4f8387bbb20f18908baeb7dff573e66",
"assets/assets/images/home/search_icon_delete_night.png": "381b9c31d95a9a14839caaf5b721a8b2",
"assets/assets/images/home/splash.png": "8b6f7721d56bc11d9391cdfd4e70b74a",
"assets/assets/images/home/splash_logo.png": "519058e1ec1e88d9c2d2bbb4720c276f",
"assets/assets/images/home/splash_night.png": "728251754e88f6da8b6700be237bab69",
"assets/assets/images/home/splash_text.png": "3f2007af23d7147bd8c60150b23aefb5",
"assets/assets/images/home/tab_mine.png": "9491580482ca1b808581dbaa8b399835",
"assets/assets/images/home/tab_mine_night.png": "45373c9e93125490a8e3ab5f8e41a81b",
"assets/assets/images/home/tab_mine_selected.png": "621037111596ae195b7dfc88c9f4eeb7",
"assets/assets/images/home/tab_mine_selected_night.png": "50f8c70ac31f2ca8e3b5cccd32acd930",
"assets/assets/images/home/tab_optional.png": "3995a65fcbf3a77a5abfc0bae8edfea0",
"assets/assets/images/home/tab_optional_night.png": "ac0bc8d4406e5b6ae403ec550bf551b9",
"assets/assets/images/home/tab_optional_selected.png": "b346015e98546fc69f1ea44840bff271",
"assets/assets/images/home/tab_optional_selected_night.png": "29e5ec23f2a25e81a08649ed5535946f",
"assets/assets/images/home/tab_quotation.png": "3fa43b0a4ed9d304cc82ca3c390cd100",
"assets/assets/images/home/tab_quotation_night.png": "7cf7e69876c19b108e6a4b5cbb5d9ae2",
"assets/assets/images/home/tab_quotation_selected.png": "ba28575b283f3958cdf50d24b4802c1c",
"assets/assets/images/home/tab_quotation_selected_night.png": "ba28575b283f3958cdf50d24b4802c1c",
"assets/assets/images/home/tab_transaction.png": "31bd91b5fc1b8ea6453fda2d20ac5d28",
"assets/assets/images/home/tab_transaction_night.png": "93a10919af02082787701c4eaa714288",
"assets/assets/images/home/tab_transaction_selected.png": "b80aa6d3eca92ef5f3692abdd01d6db7",
"assets/assets/images/home/tab_transaction_selected_night.png": "75ae1720382b813eb9ff37b032bbcf3a",
"assets/assets/images/mine/about_icon_edition.png": "c19fc235401d36289257ef97772c27bc",
"assets/assets/images/mine/about_icon_licenseplate.png": "abd25b60963fcb74ea75bd3b28984cd0",
"assets/assets/images/mine/about_icon_mailbox.png": "d2c09afbf4a6b64239dabb624a8bcbfe",
"assets/assets/images/mine/about_icon_servicehotline.png": "91f2a0b5c9cc2a773bac2f422c899b01",
"assets/assets/images/mine/bankcard_icon_more.png": "44731d88c852331710eee96c94181b37",
"assets/assets/images/mine/bank_card_add.png": "dac55bf2dccdb0e13f0980f2204ad2cc",
"assets/assets/images/mine/bank_card_add_night.png": "43e99f8c49cd15fc427a725a70a0d4c8",
"assets/assets/images/mine/bank_icon_selected.png": "3ce768f6ede178e874854a19eb300a28",
"assets/assets/images/mine/friend_auth_bg.png": "7e9076f9652ece1aa28ac1ab98201631",
"assets/assets/images/mine/friend_icon_link.png": "93171dcce90f3fad1c728e8a63d6dfb5",
"assets/assets/images/mine/friend_icon_qrcode.png": "54bc4ff607339c41f7834403ac4233c9",
"assets/assets/images/mine/icon_close.png": "d9610c577e87df65ffc57278d29d0e1f",
"assets/assets/images/mine/icon_error.png": "ec7e59165f1e765ea3130c6399e15a03",
"assets/assets/images/mine/icon_error_night.png": "194948a2007d8ab7435c26919618741c",
"assets/assets/images/mine/icon_normal.png": "e14e23b17eea55cf01af3f0654cd7c15",
"assets/assets/images/mine/icon_normal_night.png": "c33769a5b0ce5f4294748e6d29cf70dc",
"assets/assets/images/mine/icon_selected.png": "b53ebede2915ba4a55a998a022923f4b",
"assets/assets/images/mine/icon_selected_night.png": "8936e775347ca25b5106d5d1be22135c",
"assets/assets/images/mine/list_financing_bg.png": "6dbabcbec944b1ea7e270808669507d4",
"assets/assets/images/mine/list_financing_bg_disable.png": "4a987a6db48956235a969bb7e030d15e",
"assets/assets/images/mine/list_financing_bg_disable_night.png": "23810b71558c92df2fb23762c47dfb65",
"assets/assets/images/mine/list_financing_bg_night.png": "23810b71558c92df2fb23762c47dfb65",
"assets/assets/images/mine/list_icon_about.png": "bbc75b9ec770d50b985adb203fb19ace",
"assets/assets/images/mine/list_icon_about_night.png": "e3486e60b8fe367c8ee9c6aa360c4c10",
"assets/assets/images/mine/list_icon_bankcard.png": "d282b554b97d29e0c68270eeb8cd8254",
"assets/assets/images/mine/list_icon_bankcard_disable.png": "769dc07d09a2aee9cdecb97a4383e10c",
"assets/assets/images/mine/list_icon_bankcard_disable_night.png": "2762ccc45929a1ff0a8ae2b020fcc52f",
"assets/assets/images/mine/list_icon_bankcard_night.png": "e4bbde7c537c62999122b9ead0ae44a2",
"assets/assets/images/mine/list_icon_cancellation.png": "e98c6c8233a454d810ae1d9583516978",
"assets/assets/images/mine/list_icon_cashwithdrawal.png": "3e01c622c61951fbf2fc6227531a27f2",
"assets/assets/images/mine/list_icon_cashwithdrawal_disable.png": "ca23aeb701286aa31c1d287af3551174",
"assets/assets/images/mine/list_icon_cashwithdrawal_disable_night.png": "10ec4c0491f0adf3807436f1cadc7faa",
"assets/assets/images/mine/list_icon_cashwithdrawal_night.png": "a8f2b9774968ee8ceb313fcbbab6d0c6",
"assets/assets/images/mine/list_icon_commonproblem.png": "f4acb2690603905cbf8d138d39fdad63",
"assets/assets/images/mine/list_icon_commonproblem_night.png": "f6f681adecf16cd3f647e8c821e1daf2",
"assets/assets/images/mine/list_icon_financing.png": "4ff46251ee592bd8a6a1d1b8a5aecf99",
"assets/assets/images/mine/list_icon_financing_disable.png": "78b1399303635e1d5c9d0284de42206c",
"assets/assets/images/mine/list_icon_financing_disable_night.png": "8038aad97ec55d10a511c924d2e1b4ac",
"assets/assets/images/mine/list_icon_financing_night.png": "46599f72f0583c157012e422a5d95935",
"assets/assets/images/mine/list_icon_guide.png": "5f67e028352f0c475c923b9fd237ff7c",
"assets/assets/images/mine/list_icon_guide_night.png": "ecfc90767d9b9c464e077b1523d77afc",
"assets/assets/images/mine/list_icon_language.png": "09c2e9519cee96079e719d6874415bf4",
"assets/assets/images/mine/list_icon_limits%2520of%2520authority.png": "1c3f32cca78107ee1893443399e5682f",
"assets/assets/images/mine/list_icon_lion.png": "8c3100fde72f3ac304954d36766bdf5b",
"assets/assets/images/mine/list_icon_lion_night.png": "25877c1107b9e6524e3c40e323827499",
"assets/assets/images/mine/list_icon_login.png": "d3cb6dbc0fe611836739f4c6e3aa87a5",
"assets/assets/images/mine/list_icon_login_night.png": "375404f87bc6d162402b91e01342f638",
"assets/assets/images/mine/list_icon_more.png": "584989c0dccaa8be545092e49968a907",
"assets/assets/images/mine/list_icon_more_night.png": "13d29d458cbf5e7cc4ee1b5beb99642d",
"assets/assets/images/mine/list_icon_openaccount.png": "4aa9e60544bd72d7128254436c8720fb",
"assets/assets/images/mine/list_icon_openaccountenquiry.png": "88e38eef0b89c16448097acaa1ae417b",
"assets/assets/images/mine/list_icon_openaccountenquiry_night.png": "d1450624015756ac60b17d82b02819d7",
"assets/assets/images/mine/list_icon_openaccount_night.png": "50e132fa03dcd73430a21b33550e0e18",
"assets/assets/images/mine/list_icon_rate.png": "cf44585973081e85071fdeb7bb83201c",
"assets/assets/images/mine/list_icon_recharge.png": "84a4aa06ab499b0903b3c57a2a662c34",
"assets/assets/images/mine/list_icon_recharge_disable.png": "4596036e28620a4a947cc66a6552254a",
"assets/assets/images/mine/list_icon_recharge_disable_night.png": "62850a2b5e2807bf202f94676a6cf607",
"assets/assets/images/mine/list_icon_recharge_night.png": "5e295bb1e44796773ee2852f8a1c45a1",
"assets/assets/images/mine/list_icon_record.png": "a00d5e17d1592cc2e65810b91c5cb7b3",
"assets/assets/images/mine/list_icon_record_disable.png": "8d78fc1822b1f3a4a935f226092bcea8",
"assets/assets/images/mine/list_icon_record_disable_night.png": "5ba4617c4e13a2b1632d55fdd98cd7d3",
"assets/assets/images/mine/list_icon_record_night.png": "06be4856d69fa4eb0686634a3069ade6",
"assets/assets/images/mine/list_icon_suanfadan.png": "415ff342f01cf1db4184af70711cbcde",
"assets/assets/images/mine/list_icon_suanfadan_night.png": "415ff342f01cf1db4184af70711cbcde",
"assets/assets/images/mine/list_icon_subscribe.png": "ee194a4c226c0be4862bba94933a978a",
"assets/assets/images/mine/list_icon_subscribe_night.png": "620499b50f002bb0ae69a253d9a8ed29",
"assets/assets/images/mine/list_icon_transfer.png": "97b6d6e1fa232c28cd336c5ea48f0e52",
"assets/assets/images/mine/list_icon_transfer_night.png": "97b6d6e1fa232c28cd336c5ea48f0e52",
"assets/assets/images/mine/list_icon_trs.png": "6fb8516c74c89e8479c28eaa2ef8c0b5",
"assets/assets/images/mine/list_icon_trs_night.png": "31b0e21ebf5be9f0e441af2f7f16294a",
"assets/assets/images/mine/list_rate_bg.png": "d8df0c19b15371e7ae4fb4844b56645d",
"assets/assets/images/mine/list_rate_bg_night.png": "bf80a3a476c5a8a37832cd50b346d71d",
"assets/assets/images/mine/list_record_bg.png": "ddd966488041cc510ca46d59fd9eab09",
"assets/assets/images/mine/list_record_bg_disable.png": "bb19e952eedb25caafd6e6781e59b850",
"assets/assets/images/mine/list_record_bg_disable_night.png": "ca10221cf0a8c3010f501d09d2dc5dbe",
"assets/assets/images/mine/list_record_bg_night.png": "ca10221cf0a8c3010f501d09d2dc5dbe",
"assets/assets/images/mine/list__wallet_icon_more.png": "d31eb59629bdba3aafd8a42e703e7c46",
"assets/assets/images/mine/list__wallet_icon_more_night.png": "02b7cd4d3eae4a9a51c4302f6dcb5455",
"assets/assets/images/mine/mine_account_icon_tips.png": "0d49569a7534b6a917f8f79b72cf770d",
"assets/assets/images/mine/mine_account_icon_tips_night.png": "3e9a7c7202480426aa9d5b5a746b1838",
"assets/assets/images/mine/mine_account_security.png": "c63fe560a9b95c4fde8c59c7fb851439",
"assets/assets/images/mine/mine_account_security_night.png": "19b50722b77b33336cc8e34e7235ce60",
"assets/assets/images/mine/mine_approve_bg.png": "dd9d1355ab60b3afda89c0ed93a249fb",
"assets/assets/images/mine/mine_approve_icon.png": "2101479fdfd54426bb3caba8f47f5c9b",
"assets/assets/images/mine/mine_data_apply.png": "ec965baa4119495816d405c9fa05d8e6",
"assets/assets/images/mine/mine_daytime_close.png": "30041394df891ec7db0f509be8507748",
"assets/assets/images/mine/mine_golden_bg.png": "625ae7a76ca023292b0e57449bb758a6",
"assets/assets/images/mine/mine_golden_icon.png": "12581b963afdf568c4ba43eeca0fc6e4",
"assets/assets/images/mine/mine_golden_recharge.png": "dbe3f19c0fc51b8f5ad8bdb3a3df3609",
"assets/assets/images/mine/mine_golden_recharge_night.png": "3613564c0050ad101b7298dd16c2a5bc",
"assets/assets/images/mine/mine_icon_back.png": "4416eb3d9f180f88866adaa27d8f4895",
"assets/assets/images/mine/mine_language_set_icon.png": "a4099b7d5d0c1adda9b77701a9cb103e",
"assets/assets/images/mine/mine_night_icon.png": "94a2f7c00d11642fea964042e27f366d",
"assets/assets/images/mine/mine_personal_homepage.png": "5261fc2b1528f5ec5e16cadc5451ad1d",
"assets/assets/images/mine/mine_personal_homepage_night.png": "9ed3e7844ac16a32c9f6147d0a7e60e1",
"assets/assets/images/mine/mine_phone_address.png": "c204122f6523b9afdb0f3ae69c6aa40a",
"assets/assets/images/mine/mine_set_login_off_btn.png": "17962cc367d1a0c342b4ef2dc9750012",
"assets/assets/images/mine/mine_trade_confirm_open.png": "d405c75a35864e7f89516d6eeb17a8ef",
"assets/assets/images/mine/mine_trade_set_icon.png": "250d1aeed71c30813a4a650495f595e5",
"assets/assets/images/mine/mine_upload_bg.png": "3c2d16fac6b6de76650b71e36a497044",
"assets/assets/images/mine/mine_upload_icon.png": "884825945d4c12bedfe5f03fd3b03815",
"assets/assets/images/mine/mywallet_bg.png": "cd80c7f787ea4503becd8a2663cac48f",
"assets/assets/images/mine/mywallet_bg_night.png": "568d5096982d79775405232fe7c6f3a2",
"assets/assets/images/mine/mywallet_icon_capitalflow.png": "ad051cf682f0e50050983ad1ec41567b",
"assets/assets/images/mine/mywallet_icon_capitalflow_night.png": "39835b5264b1ca6c699c5b07760fcb3c",
"assets/assets/images/mine/mywallet_icon_cashwithdrawal.png": "e4470ffad7b5778ca9b5ef047853c1da",
"assets/assets/images/mine/mywallet_icon_cashwithdrawal_disable.png": "60fba92bdb18ce81a8e013f70db8560c",
"assets/assets/images/mine/mywallet_icon_cashwithdrawal_disable_night.png": "e0f54dad39d20dcdbfbca340f483035c",
"assets/assets/images/mine/mywallet_icon_cashwithdrawal_night.png": "ccb76e9fe2e1f4664f020d33208612ab",
"assets/assets/images/mine/mywallet_icon_close_account.png": "0bbd8def6932261ec555d6983a25ebf9",
"assets/assets/images/mine/mywallet_icon_close_account_night.png": "0bbd8def6932261ec555d6983a25ebf9",
"assets/assets/images/mine/mywallet_icon_recharge.png": "87d4e87a2fb084d69b025eec50487daf",
"assets/assets/images/mine/mywallet_icon_recharge_disable.png": "134f8beb31957b25fc771059b195d896",
"assets/assets/images/mine/mywallet_icon_recharge_disable_night.png": "1890ddb4f84857cd40d9c1fbb02c639a",
"assets/assets/images/mine/mywallet_icon_recharge_night.png": "618045205668a884303574c7e4cf0338",
"assets/assets/images/mine/my_btn_login_bg.png": "bd03a717133d575dabfd712b47ac3e49",
"assets/assets/images/mine/my_btn_login_bg_night.png": "7c2bbb05708bff1e5ae6d904f9d3a4ea",
"assets/assets/images/mine/my_btn_openaccount_bg.png": "830bef65dd7f152bbd58f694dd195d26",
"assets/assets/images/mine/my_btn_openaccount_bg_night.png": "7da2d12eb5c4ca80d9d49fc49b2f6b82",
"assets/assets/images/mine/my_btn_progressinquiry_bg.png": "da0188a9a1cc380fc3a8f59519dcb4ce",
"assets/assets/images/mine/my_btn_progressinquiry_bg_night.png": "cb7db3dbec9bb690c1eedfcaed2b8874",
"assets/assets/images/mine/my_headportrait.png": "9e2579143f007f3f64920f6cecc07bdf",
"assets/assets/images/mine/my_icon_setup.png": "3772257c8925d34a58df7c4c09e9a6c6",
"assets/assets/images/mine/my_icon_setup_night.png": "8fb10e72fe5a8442087d60dc377d5ccf",
"assets/assets/images/mine/my_mywallet_icon.png": "cbe6424afbcd981a280436565a355474",
"assets/assets/images/mine/my_mywallet_icon_night.png": "f0c133b6112160aa5d82104e570e6629",
"assets/assets/images/mine/my_wallet_bg.png": "8f493f7364e13c668d08ba4b1ed6bccb",
"assets/assets/images/mine/my_wallet_bg_night.png": "0d7f7feeb5c225f5cdf50735786c405c",
"assets/assets/images/mine/placeholder.png": "ad40817b55a6a6f0bd1721e16faf8bc8",
"assets/assets/images/mine/risk_tips.png": "cb3b2b97123a40d280bb3a35b1681c4e",
"assets/assets/images/mine/search_icon_delete.png": "5057ae8a0900aa5e472b0832d1f42a6e",
"assets/assets/images/mine/trs_advantage_img.png": "59116430fa01a6e0ecec799397b7a894",
"assets/assets/images/mine/trs_advantage_img_night.png": "cbe4bd7a74dd9aa84e8a033493b85e6b",
"assets/assets/images/mine/trs_introduce_img.png": "c61f0a9838f22efc399984e3e26bcd84",
"assets/assets/images/mine/trs_introduce_img_night.png": "7c5c39052817d8f6be1cc271df098a28",
"assets/assets/images/mine/update_bg.png": "8d894d88ec1567e714229de4de59059f",
"assets/assets/images/mine/update_bg_night.png": "c70fa561821f8930e6507f05e46ce249",
"assets/assets/images/mine/upload_data_bg.png": "cf3372d49f61e0cc0f94d63aa1c0fcf7",
"assets/assets/images/mine/upload_data_bg_night.png": "d2a0e74d8b0adad438b456f216decb52",
"assets/assets/images/mine/upload_data_delete.png": "0455012cac14121629a5e9b8ebd4af39",
"assets/assets/images/mine/upload_picture.png": "fbde2314d1188a3a269dfcfd6b79f479",
"assets/assets/images/mine/wallet_icon_invisible.png": "b52c98f0775526324fb437e27965dce4",
"assets/assets/images/mine/wallet_icon_visible.png": "ce04e300d4a86cb26290b734dac7220d",
"assets/assets/images/pdf/caymanPrivacyNotice.pdf": "450ecc9335f7596d8cdb7699f40521df",
"assets/assets/images/pdf/ISDA.pdf": "cc509fb2db7d7f0a09b2a5c44f1b4203",
"assets/assets/images/pdf/TRS.pdf": "05687bea6631af8a6739c79850b3ebe5",
"assets/assets/images/pdf/tzfx.pdf": "12afbe4ea8d88b499f80ca57484ccbd5",
"assets/assets/images/trade/account_icon_tips.png": "7b759291d0cfdd9622d3861d7e805df2",
"assets/assets/images/trade/drop_icon_1.png": "f3fd1fd3693f5104d7983aa5a276b315",
"assets/assets/images/trade/drop_icon_1_night.png": "4c20f9f5141fc47442dfeeef408b76f1",
"assets/assets/images/trade/drop_icon_2.png": "15e296b2ccdbd17764e597c02e6a54d8",
"assets/assets/images/trade/drop_icon_2_night.png": "fb5561e96f7f0d173355ac4e18914f68",
"assets/assets/images/trade/financing_details_bg.png": "1be713cbbf4fe4dc9d2d64eb327b6f6b",
"assets/assets/images/trade/financing_details_bg_night.png": "93592476a09f8c2645df0c95f6e70f64",
"assets/assets/images/trade/financing_details_bg_slices_trigger.png": "0cf60ba33942f01d34529ba32baecfcb",
"assets/assets/images/trade/financing_details_bg_slices_trigger_night.png": "592e167e409d4340f04b72dc88b02cdc",
"assets/assets/images/trade/input_btn_plus.png": "1f455b35d0c25093f2e1e2d6be214b1b",
"assets/assets/images/trade/input_btn_plus_night.png": "e6dfe315f4e2172506cde64d8fd30f93",
"assets/assets/images/trade/input_btn_reduce.png": "68d378c978da5d641b4e1f9bd0dd936d",
"assets/assets/images/trade/input_btn_reduce_night.png": "1640cb2a945da66f33724e95c040d52a",
"assets/assets/images/trade/list_icon_more.png": "aee3cc39316204373a0c74aa9baf1ef4",
"assets/assets/images/trade/list_icon_retract.png": "f5c3977cd04503f608cce4ebe8f4497c",
"assets/assets/images/trade/options_more.png": "e9d5525dfbca29fafbfca9f5285a1c44",
"assets/assets/images/trade/options_upload.png": "1d65723835a0ef09e1b453cfa07b1e3b",
"assets/assets/images/trade/options_uploaded.png": "34964f484d764785967f58a419470f71",
"assets/assets/images/trade/options_uploaded_night.png": "34964f484d764785967f58a419470f71",
"assets/assets/images/trade/options_upload_night.png": "c40feabd16eb5e67920b1adc06607869",
"assets/assets/images/trade/trade_dropdown_icon.png": "83958a27cdd13a5586f24b28ef4bc0db",
"assets/assets/images/trade/trade_dropdown_icon_night.png": "904de465a0838d433629b6f0b6512800",
"assets/assets/images/trade/trade_icon_tips.png": "3bee951b0487118773cfd5e4350384ef",
"assets/assets/images/trade/trade_icon_tips_night.png": "e71b7442710c02094155a615b189f965",
"assets/assets/images/trade/trade_icon_unfold.png": "406ff4ab570f700721aefe3e08029b41",
"assets/assets/images/trade/trade_time.png": "255f33b756d632198925a94b1da25470",
"assets/assets/images/trade/transaction_icon_cancellation.png": "d87f0e162d5ecbddcea18dade73dd9a1",
"assets/assets/images/trade/transaction_icon_default.png": "dc0143eed8acbd53fce4da473034e4bb",
"assets/assets/images/trade/transaction_icon_default_down.png": "1a9421a60d7b27b09dbae6fcebfefeae",
"assets/assets/images/trade/transaction_icon_default_up.png": "10edb9645f6612694074fa34265a063f",
"assets/assets/images/trade/transaction_icon_purchase.png": "4215ee90521c28c1ecd2e3183bc2b565",
"assets/assets/images/trade/transaction_icon_query.png": "7ae26fcbc9fe9c0208fe0341af5195c1",
"assets/assets/images/trade/transaction_icon_sellout.png": "32110105193278ab0f259ea399cc8400",
"assets/assets/regula.license": "30a091eda477ac83003dee34d3ab6435",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "be428a82a20d0d2593294f2fb9baf0e5",
"assets/NOTICES": "a6feb627d2ce48430cca91e4a04fc7ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a3ad984c99c734c297e5db2ad4fb0a62",
"/": "a3ad984c99c734c297e5db2ad4fb0a62",
"main.dart.js": "567eb9c1f5b0ee1acad2a21f8a8f11ec",
"manifest.json": "a637715f7fddb5424d63652c87bf72ad",
"sqflite_sw.js": "5b2f19eaeea1e3e1a91873a3a86cf790",
"sqlite3.wasm": "79a4cf7ac1cf1f9d5081474f5a7bb5ba",
"version.json": "a0c8c39e5e08a742ee609c484df2819e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
