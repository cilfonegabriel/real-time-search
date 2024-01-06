<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents
- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Test](#test)
  - [Usage](#usage)
  - [install](#install)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 Realtime Search Box with Analytics  <a name="about-project"></a>
**Realtime Search Box with Analytics** This project focuses on creating a realtime search box with analytics, allowing users to search articles and providing insights into user search behavior. Below is an overview of the project, its features, and how to get started.

* Services (job queues, cache servers, search engines, etc.)
🛠 Built With <a name="built-with"></a>
Tech Stack <a name="tech-stack"></a>
This project was implemented using:

<details>
  <summary>Framework</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>
<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>
- **Realtime Search Box:

- **Users can perform instant searches.
- **Searches are logged in real-time.
- **Search Analytics:

- **Analytics are generated based on user search queries.
- **Searches are summarized to avoid the 'pyramid problem.'
- **IP Tracking:

- **Searches are tracked via IP for data integrity per user.
- **Scalability:

- **Designed to handle thousands of requests per hour.
- ** Deployed on Heroku for scalability testing.
- ** Bonus Features:

- **Frontend stylized for an enhanced user interface.
- **RSpec testing for code quality and functionality.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps:

### Prerequisites

In order to run this project you need to have installed:

- [ ] install ruby

- [ ] install postgresql

- [ ] You’ll need to have Ruby and Rails on your machine.

Optionally, in order to modify this project you should to have installed:

- [ ] Git.

- [ ] Code editor like: [Visual Studio code](https://code.visualstudio.com/), or others...

### Setup

To clone this repository to your desired folder:

- You can download the **Zip** file from the GitHub repository, or clone the repository with:

```console
git clone https://github.com/cilfonegabriel/real-time-search.git
```

- Access the cloned directory with:

```console
cd real-time-search
```

- Open it with your favorite code editor or with the live server

### Install

To run the project, execute the following command in the project directory:

```console
    bundle install
    rails db:create
    rails db:migrate
```

### Tests

To run the tests run the following commands:

Install gems
```ruby
  bundle install
```
Run tests
```ruby
  rspec spec
```

### Usage

To run the project, execute the following command in the project directory:

```console
rails server
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Gabriel Cilfone**

- GitHub: [Gabriel Cilfone](https://github.com/cilfonegabriel)
- LinkedIn: [Gabriel Cilfone](www.linkedin.com/in/gabriel-cilfone/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

We will implement this on the future:

- [ ] **Users can login to blog app**
- [ ] **Users can add a post**
- [ ] **Users can see a post list**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/cilfonegabriel/real-time-search/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)