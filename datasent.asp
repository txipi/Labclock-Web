<%
	'data to be filled
	'<configuration>
	dim emailAdress
	dim experimentCode
	emailAdress = "garaizar@deusto.es"
	experimentCode ="LIBET-001 - WEB"
	domain = "deusto.es"
	'</configuration>

	'program variables
	dim mail
	dim date
	dim tx 
	dim iipp
	dim location
	date = Now
	
	tx = Request.ServerVariables("HTTP_REFERER") 
	iipp = request.ServerVariables("HTTP_X_FORWARDED_FOR")
	if iipp = "" then iipp = Request.ServerVariables("REMOTE_ADDR")
	
        referer = inStr(Ucase(tx), Ucase(domain))
	if referer <> 0 then
		set mail = CreateObject("CDONTS.NewMail")
        	mail.From = emailAdress
		mail.To = emailAdress
		mail.Subject = "Experimental data " & experimentCode & " //" & date
		mail.BodyFormat = 1
		mail.MailFormat = 1

		tx = iipp
		location = "Internet"

		tx = experimentCode & ", " & location & "," & request("data")
		mail.Body = tx
		mail.Send
		set mail = Nothing
	end if	
%>
