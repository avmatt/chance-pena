var sm = new SMEAppleMusic({
  ae: {
    ae: "5b67bb2f1fc43016bbf7bd855b3efcf2a8a1ffe6c68021f6134895b0fabf77f7",
    brand_id: "4155851",
    segment_id: "1765440",
    activities:
      '{"actions":{"presave":105904},"mailing_list_optins":{"a0S1p00000TfUsBEAV":105905}}',
  },
  am: {
    dev_token: "",
    save_mode: "library",
    custom_playlist_name: "",
    new_apple_presave: true,
    resources: {
      playlists: [],
      albums: [],
    },
  },
  sf: {
    form: "257472",
    default_mailing_list: "",
  },
  smf: {
    campaign_id: "257472",
    campaign_key: "a2af82d9f325b074df4bb9b4533bacda",
  },
});

document.getElementById("link-apple-music").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("link-apple-music").className = "hidden";
  document.getElementById("form-apple-music").className = "flex w-full h-[40px] overflow-hidden";
  document.getElementById("input-email-address").focus();
});

document.getElementById("form-apple-music").addEventListener("submit", function (e) {
  e.preventDefault();
  //   var email = document.getElementById("input-email-address").value;
  //   sm.doActions(email, false, ["a0S1p00000TfUsBEAV"])
  //     .then(function (res) {
  //       window.open("/thanks");
  //     })
  //     .catch(function (err) {
  //       // Error - handle your logic here.
  //     });
});

document.getElementById("link-open-tour").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("container-tour").className =
    "fixed inset-0 bg-black/80 z-10 p-20 md:p-100 overflow-scroll";
});

document.getElementById("link-close-tour").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("container-tour").className =
    "fixed inset-0 bg-black/80 z-10 p-100 hidden";
});
