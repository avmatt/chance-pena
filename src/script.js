// var sm = new SMEAppleMusic({
//   ae: {
//     ae: "6f031bfdb1f3b11f33997bd5fbf79af9c610f313cdae47526986a5c48a00888d",
//     brand_id: "5310870",
//     segment_id: "2391264",
//     activities:
//       '{"actions":{"presave":179199},"mailing_list_optins":{"a0STy000005vDorMAE":179200}}',
//   },
//   am: {
//     dev_token: "",
//     save_mode: "library",
//     custom_playlist_name: "",
//     new_apple_presave: true,
//     resources: {
//       playlists: [],
//       albums: [],
//     },
//   },
//   sf: {
//     form: "620959",
//     default_mailing_list: "",
//   },
//   smf: {
//     campaign_id: "484774",
//     campaign_key: "333c4e8b19a72989caf8",
//   },
// });

document.getElementById("link-apple-music").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("link-apple-music").className = "hidden";
  document.getElementById("form-apple-music").className = "flex w-full h-[40px] overflow-hidden";
  document.getElementById("input-email-address").focus();
});

document.getElementById("form-apple-music").addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("input-email-address").value;
  sm.doActions(email, false, ["a0S1p00000TfUsBEAV"])
    .then(function (res) {
      window.open("/thanks");
    })
    .catch(function (err) {
      // Error - handle your logic here.
    });
});

document.getElementById("link-open-tour").addEventListener("click", function (e) {
  console.log("open tour");
  e.preventDefault();
  document.getElementById("container-tour").className =
    "fixed inset-0 bg-black/80 z-10 p-20 md:p-100 overflow-scroll";
});

document.getElementById("link-close-tour").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("container-tour").className =
    "fixed inset-0 bg-black/80 z-10 p-100 hidden";
});
