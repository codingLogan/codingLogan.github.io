require 'date'

# Create new file by asking for the name of the post
puts "What is the name of the post?"
post_name = gets.strip
puts post_name

# Autogenerate the date for the post
todays_date = Date.today.to_s
puts "Generating Post for " + todays_date

# Place the post in the default location
f = File.open("./_posts/" + todays_date + "-" + post_name + ".md", "a")

# Create the template file for the post
f << "---
tags: [javascript]
---

Preview note

## Summary
## Item1
## Item2
## Item3
## Conclusion
"