// Show Profile and Chats
// Show Profile and Chats
const showProfile = () => {
    const profile = document.getElementById("profile");
    profile.style.left = "0%";
  };
  
  const showChats = () => {
    //   const chats = document.getElementById("chats");
    const profile = document.getElementById("profile");
    profile.style.left = "-30%";
  
    if (window.innerWidth <= 426) {
      const profile = document.getElementById("profile");
      profile.style.left = "-100%";
    } else if (window.innerWidth <= 768) {
      const profile = document.getElementById("profile");
      profile.style.left = "-40%";
    }
  };
  const profileToggle = document.getElementById("profile-arrow");
  profileToggle.addEventListener("click", showChats);
  
  // Change the profile picture
  // Change the profile picture
  const fileInput = document.getElementById("fileInput");
  const profile__hover = document.getElementById("profile__hover-text");
  
  profile__hover.addEventListener("click", () => {
    fileInput.click();
  });
  fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];
    const profilePicture = document.getElementById("profile-picture");
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function () {
        profilePicture.src = reader.result;
        document.getElementsByClassName("chats__header--profile")[0].src =
          reader.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  });
  
  // Change the name and about
  // Change the name and about
  const profileName = document.getElementById("profile-name");
  const editNameBtn = document.getElementById("edit-name-icon");
  const editNameInputContainer = document.getElementById(
    "edit-name-input-container"
  );
  const nameInput = document.getElementById("profile-name-input");
  let profile__body__InfoName = document.getElementById(
    "profile__body__info-name"
  );
  editNameBtn.addEventListener("click", () => {
    editNameInputContainer.classList.remove("invisible");
    profile__body__InfoName.classList.add("invisible");
  });
  
  const changeProfileName = () => {
    profileName.innerText = nameInput.value;
  
    editNameInputContainer.classList.add("invisible");
    profile__body__InfoName.classList.remove("invisible");
  };
  
  const profileAbout = document.getElementById("profile-about");
  const editAboutBtn = document.getElementById("edit-about-icon");
  const aboutInput = document.getElementById("profile-about-input");
  const profile__body__InfoAbout = document.getElementById(
    "profile__body__info-about"
  );
  const editAboutInputContainer = document.getElementById(
    "edit-about-input-container"
  );
  editAboutBtn.addEventListener("click", () => {
    editAboutInputContainer.classList.remove("invisible");
    profile__body__InfoAbout.classList.add("invisible");
  });
  
  const changeProfileAbout = () => {
    profileAbout.innerText = aboutInput.value;
  
    editAboutInputContainer.classList.add("invisible");
    profile__body__InfoAbout.classList.remove("invisible");
  };
  
  // Show contact Info
  // Show contact Info
  const chatHeaderBtn = document.getElementsByClassName(
    "opened__chat__profile"
  )[0];
  const openedChatSection = document.getElementById("opened__chat");
  const contactInfoSection = document.getElementById("contact-info");
  
  chatHeaderBtn.addEventListener("click", () => {
    openedChatSection.style.width = "40%";
    contactInfoSection.style.right = "0";
  });
  
  const contactInfoCloseBtn = document.getElementById("contact__info-close");
  contactInfoCloseBtn.addEventListener("click", () => {
    if (window.innerWidth <= 426) {
      contactInfoSection.style.right = "-100%";
      openedChatSection.style.width = "100%";
    } else {
      contactInfoSection.style.right = "-40%";
      openedChatSection.style.width = "70%";
    }
  });
  
  // Show Communities
  // Show Communities
  const communitiesBackBtn = document.getElementById("communities_left_arrow");
  const chatsSection = document.getElementById("chats");
  const communitySection = document.getElementById("community");
  const showCommunity = () => {
    // chatsSection.classList.add("invisible");
    communitySection.style.left = "0%";
  };
  
  communitiesBackBtn.addEventListener("click", () => {
    communitySection.style.left = "-30%";
  });
  
  // Show Chat
  let activeChat = document.getElementsByClassName("chat--active")[0];
  activeChat.addEventListener("click", () => {
    let bannerSec = document.getElementById("banner");
    let openedChat = document.getElementById("opened__chat");
  
    bannerSec.classList.add("invisible");
    openedChat.classList.remove("invisible");
  });
  
  // Show New Chat Section
  let newChatBackBtn = document.getElementById("new-chat_left_arrow");
  let newChatSection = document.getElementById("new__chat");
  const showNewChat = () => {
    newChatSection.style.left = "0%";
  };
  newChatBackBtn.addEventListener("click", () => {
    newChatSection.style.left = "-30%";
  });
  