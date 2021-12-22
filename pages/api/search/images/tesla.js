// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function imageAPI(req, res) {
    res.status(200).json({
      results: [],
      image_results: [
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZidkfeRInWIen4uPlQpndLBl7Oo4Sc5w4ZJj67afLhOWl8n3lTxIOWZ_S3g&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.irishtimes.com/business/technology/tesla-motors-to-open-new-irish-store-in-2017-1.2831894&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIABAC&usg=AOvVaw0O2Sg4mYfHMNUIJnyVnuGi",
                  title: "Tesla Motors to open new...   www.irishtimes.com",
                  domain: "Tesla Motors to open new...   www.irishtimes.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkt6VmOCVtr9Gm6Zrgvo-b8iaZentzQq9f75u9BVItgVG0QPUghBLsYdIlPk&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.tesla.com/models&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIExAC&usg=AOvVaw0kKRAxAMgdTrp_Pvnwf9xo",
                  title: "Model S | Tesla   www.tesla.com",
                  domain: "Model S | Tesla   www.tesla.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHpm2mqGG3JpBYBGA7rcbdpDy-RX0mN2OeZoEJ8YyTh3YqaSn-WxcZDM3HY4&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.irishtimes.com/life-and-style/motors/tesla-on-a-charge-as-it-opens-new-base-in-ireland-1.3281861&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIEhAC&usg=AOvVaw2-sajamZDiue5OoVkMw2r8",
                  title: "Tesla on a charge as it...   www.irishtimes.com",
                  domain: "Tesla on a charge as it...   www.irishtimes.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRf0fwVeLuyz8HTLyRJU86zNHlJE-xTo7k2ZnzJJSQwgPRju09-13q9DLLgw&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.tesla.com/modelx&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIERAC&usg=AOvVaw2doGJMBg8-ZQuHtlBCA7ZA",
                  title: "Model X | Tesla   www.tesla.com",
                  domain: "Model X | Tesla   www.tesla.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS2vdb744GEAPH3SJqMwwLTjnG1yNgZjZWazqeB7K1FLQDqfM6yz7HcRtgu8&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://fora.ie/tesla-irish-store-opening-3364242-Apr2017/&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIEBAC&usg=AOvVaw3ENbspNQmQEPDAuCr_JHm5",
                  title: "Tesla has opened its first...   fora.ie",
                  domain: "Tesla has opened its first...   fora.ie"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDSgv3fEvBTFixbwgik8qO21ypKP7QybmWfaZF8VM2xNmhSzSbDUS0S-4x9A&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.tesla.com/event/test-drive-model-s-dublin&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIDhAC&usg=AOvVaw1SJALkpycWsBTwluTQf3FG",
                  title: "Events | Tesla   www.tesla.com",
                  domain: "Events | Tesla   www.tesla.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOszf80IpDyth8PxaI0_BXyiTlzDT-OqH7rQKvtervIByHF7nBEMJ6yfs&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.tesla.com/event/test-drive-model-s-model-x-tesla-dublin&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIDxAC&usg=AOvVaw0243x4MbuJlx4Jg4JLDAMD",
                  title: "Events | Tesla   www.tesla.com",
                  domain: "Events | Tesla   www.tesla.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiBkXGhTLyaYecVD0f9X-Xd6ZZVdTPZRUkbGKxuqBArIe0m2nO_R9egpCZKo&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.forbes.com/sites/simonconstable/2021/03/28/does-teslas-tumble-mean-the-electric-car-party-is-over/&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIDBAC&usg=AOvVaw0DbXWfUi1yQSAcv8y8UMxy",
                  title: "Does Tesla's Tumble Mean...   www.forbes.com",
                  domain: "Does Tesla's Tumble Mean...   www.forbes.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjGOuTivobWnhw9ELT142wQ41cF92cqPYKpH5hg7miVGyqO9snrxnja-dw8k&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.independent.ie/business/e-car-renter-launches-tesla-fleet-in-ireland-38034904.html&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIDRAC&usg=AOvVaw1Gwo23WI500BCSFLdTIO-4",
                  title: "E-car renter launches Tesla...   www.independent.ie",
                  domain: "E-car renter launches Tesla...   www.independent.ie"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzYV12rYZiHtl05YARe5DDW6FlgX3-2ZxDz5aksufPFd7QgYEAHRED-bmQ34&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.topgear.com/car-reviews/tesla/model-3&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQICxAC&usg=AOvVaw0jFvOqiChUepsuraGd1Gs1",
                  title: "Tesla Model 3 Review 2021 |...   www.topgear.com",
                  domain: "Tesla Model 3 Review 2021 |...   www.topgear.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Z5uqsBHw2ir_HFNnDLrUNGdoALFFHzij3JkUvbJVWC6hL6pws0tGkNo99g&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.tesla.com/event/weekend-brunch-tesla-dublin&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIChAC&usg=AOvVaw1HwdOk_QsbTg7LTuK2d8ri",
                  title: "Events | Tesla   www.tesla.com",
                  domain: "Events | Tesla   www.tesla.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNPTSXph0iHKqTL_zTInGrlD579klv8YxtMlI0xmDIKHZ4u5o6I5U0Pf6HRY&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.cnbc.com/2021/03/29/tesla-double-charged-some-customers-for-new-cars.html&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQICRAC&usg=AOvVaw3PX7hivZ21ttYcJk87FvAJ",
                  title: "Tesla double-charged some...   www.cnbc.com",
                  domain: "Tesla double-charged some...   www.cnbc.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQbT9uvlWxdCikeYe_Y9f83lz44FZGznQ0McL4_4RUO3Z23mXz6r-9bvLw-o&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.theverge.com/2021/10/13/22724171/nhtsa-tesla-letters-fsd-beta-autopilot-recall-emergency-vehicles&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQICBAC&usg=AOvVaw0ygxxJdLFO-gyswEs0MyRC",
                  title: "Safety regulator wants info...   www.theverge.com",
                  domain: "Safety regulator wants info...   www.theverge.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvWQTFPOR0j95xbYhD0zc0QcW5LQ5spT5oVFeZ8AKBtejYFTwSKA5hrM6CNs&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.motor1.com/features/313677/how-much-is-a-tesla/&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIBxAC&usg=AOvVaw2AeoRulpXBD_KWXWTUTq-l",
                  title: "How Much Does A Tesla Cost?...   www.motor1.com",
                  domain: "How Much Does A Tesla Cost?...   www.motor1.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKqfpIYmCdBDp01RZwZaFmGbkSCvd_Mqm001qvksunM6-r5_zUz6Tkj3q09c&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://en.wikipedia.org/wiki/Tesla_Model_S&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIBBAC&usg=AOvVaw3GlhGCHy3K6oROTrN0VaL_",
                  title: "Tesla Model S - Wikipedia   en.wikipedia.org",
                  domain: "Tesla Model S - Wikipedia   en.wikipedia.org"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwF4trUEoEUVoo6D_o5czikC100an3d11pjmF9Jwm2MvoGppRlX9vTXUipKs&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.tesla.com/models&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIAhAC&usg=AOvVaw1MONRqpUnU9NiQlQwIRMTh",
                  title: "Model S | Tesla   www.tesla.com",
                  domain: "Model S | Tesla   www.tesla.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2KnI3zpX1WyoCK_QXVaXvdQU6aGnxBautQR7txv7JAAOrAHA4r7hFvYhAA&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://insideevs.com/news/530354/new-tesla-roadster-coming-2023/&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIBhAC&usg=AOvVaw2PE5sw_dNEmufLSpyYrKjz",
                  title: "New Tesla Roadster Coming...   insideevs.com",
                  domain: "New Tesla Roadster Coming...   insideevs.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrthuHucOj3UNyKwVZYTsoEqKF1gnbXeEyWL9np4zgPUZtD7FAAGCK8tlS4B8&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.reuters.com/business/autos-transportation/dutch-forensic-lab-says-it-has-decoded-teslas-driving-data-2021-10-21/&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIBRAC&usg=AOvVaw3D_YTtizNy7dHadEfBR-cU",
                  title: "EXCLUSIVE Dutch forensic...   www.reuters.com",
                  domain: "EXCLUSIVE Dutch forensic...   www.reuters.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsVRolLL4Rpoqz7Vu2AG8elr98uc1mQzuIPbnTfTqHjxEZpmNpU8eJz0wpj0&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.theverge.com/2020/2/6/21127243/tesla-model-s-autopilot-disabled-remotely-used-car-update&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIARAC&usg=AOvVaw0z_WfO0pX9zKhFznYusAlN",
                  title: "Tesla remotely disables...   www.theverge.com",
                  domain: "Tesla remotely disables...   www.theverge.com"
              }
          },
          {
              image: {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdnmPJlAy9xmLcg0HDW2y4Vj4V7cQBT7XYaYhpsgcm6H57ZA0zrmFkbmTGA&s",
                  alt: ""
              },
              link: {
                  href: "https://www.google.com/url?q=https://www.topgear.com/car-reviews/tesla/model-3&sa=U&ved=2ahUKEwj-14nLy_H0AhVXhlwKHW8uAVgQr4kDegQIAxAC&usg=AOvVaw2aX-wAtmOQrzbLhlL7RxyO",
                  title: "Tesla Model 3 Review 2021 |...   www.topgear.com",
                  domain: "Tesla Model 3 Review 2021 |...   www.topgear.com"
              }
          }
      ],
      total: null,
      answers: [],
      ts: 1.6017115116119385,
      device_type: "desktop"
  })
  }
