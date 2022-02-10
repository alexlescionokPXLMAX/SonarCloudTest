# exposed credentials
credential = "0145VXki111b"
password = "passhello12323world2"

# injection - Exploiting Eval() and Exec()
compute = input('\nYour expression? => ')
if not compute:
    print ("No input")
else:
    print ("Result =", eval(compute))

# injection - exploiting input
admin_pass = get_user_pass("admin")
if password == input("Please enter your password"):
  login()
else:
  print ("Password is incorrect!")
  
# injection - OS commands 
address = request.args.get("address")
cmd = "ping -c 1 %s" % address
subprocess.Popen(cmd, shell=True)

# using assert()
assert sum([1, 2, 3]) == 6, "Should be 6"