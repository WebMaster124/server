<?php // echo 'sdsdfgsdf123242353454365';exit; ?>
<?php print '<?xml version="1.0" encoding="UTF-8" ?>'; ?>

<!--<SOAP-ENV:Envelope	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"	xmlns:ns1="http://schemas.datacontract.org/2004/07/PostaWebClient"
	xmlns:ns2="http://tempuri.org/">
	<SOAP-ENV:Body>
		<ns2:Shipment_Creation>
			<ns2:SHIPINFO>
				<ns1:CashOnDelivery>100</ns1:CashOnDelivery> 				
				<ns1:CashOnDeliveryCurrency>AED</ns1:CashOnDeliveryCurrency>
				<ns1:ClientInfo>
					<ns1:CodeStation>CODE_STATION</ns1:CodeStation>
					<ns1:Password>PASSWORD</ns1:Password>
					<ns1:ShipperAccount>ACCOUNT_CODE</ns1:ShipperAccount>
					<ns1:UserName>ACCOUNT_CODE</ns1:UserName>
				</ns1:ClientInfo>
				<ns1:CodeCurrency>AED</ns1:CodeCurrency>
				<ns1:CodeService>SRV6</ns1:CodeService>
				<ns1:CodeShippmentType>SHPT2</ns1:CodeShippmentType>
				<ns1:ConnoteContact>
					<ns1:Email1>gsoservice@postaplus.com</ns1:Email1>
					<ns1:Email2>reuser@tst.com</ns1:Email2>
					<ns1:TelHome>3232322344343</ns1:TelHome>
					<ns1:TelMobile>3232322344343</ns1:TelMobile>
					<ns1:WhatsAppNumber>3232322344343</ns1:WhatsAppNumber>
				</ns1:ConnoteContact>
				<ns1:ConnoteDescription>Testig only</ns1:ConnoteDescription>
				<ns1:ConnoteInsured>N</ns1:ConnoteInsured>				
				<ns1:ConnoteNotes>
					<ns1:Note1>Testing only</ns1:Note1>
					<ns1:Note2/>
					<ns1:Note3/>
					<ns1:Note4/>
					<ns1:Note5/>
					<ns1:Note6/>
				</ns1:ConnoteNotes>
				<ns1:ConnotePieces>1</ns1:ConnotePieces>
				<ns1:ConnoteProhibited>N</ns1:ConnoteProhibited>
				<ns1:ConnoteRef>
					<ns1:Reference1>ABC123456</ns1:Reference1>
					<ns1:Reference2></ns1:Reference2>
				</ns1:ConnoteRef>
				<ns1:Consignee>
					<ns1:Company>Test company</ns1:Company>
					<ns1:FromAddress>Test address</ns1:FromAddress>
					<ns1:FromArea>NA</ns1:FromArea>
					<ns1:FromCity>CITY415671</ns1:FromCity>
					<ns1:FromCodeCountry>ARE</ns1:FromCodeCountry>
					<ns1:FromMobile>00000000</ns1:FromMobile>
					<ns1:FromName>Mr.From Name</ns1:FromName>
					<ns1:FromPinCode>NA</ns1:FromPinCode>
					<ns1:FromProvince>DU</ns1:FromProvince>
					<ns1:FromTelphone>00000000</ns1:FromTelphone>
					<ns1:Remarks>Test remarks</ns1:Remarks>
					<ns1:ToAddress>Test To Address</ns1:ToAddress>
					<ns1:ToArea>NA</ns1:ToArea>
					<ns1:ToCity>CITY415671</ns1:ToCity>
					<ns1:ToCivilID>NA</ns1:ToCivilID>
					<ns1:ToCodeCountry>ARE</ns1:ToCodeCountry>
					<ns1:ToCodeSector>NA</ns1:ToCodeSector>
					<ns1:ToDesignation>NA</ns1:ToDesignation>
					<ns1:ToMobile>00000000</ns1:ToMobile>
					<ns1:ToName>Mr.To Name</ns1:ToName>
					<ns1:ToPinCode>NA</ns1:ToPinCode>
					<ns1:ToProvince>DU</ns1:ToProvince>
					<ns1:ToTelPhone>00000000</ns1:ToTelPhone>
				</ns1:Consignee>
				<ns1:CostShipment>100</ns1:CostShipment>
				<ns1:ItemDetails>
					<ns1:ITEMDETAILS>
						<ns1:ConnoteHeight>1</ns1:ConnoteHeight>
						<ns1:ConnoteLength>1</ns1:ConnoteLength>
						<ns1:ConnoteWeight>0.5</ns1:ConnoteWeight>
						<ns1:ConnoteWidth>1</ns1:ConnoteWidth>
						<ns1:ScaleWeight>0</ns1:ScaleWeight>
					</ns1:ITEMDETAILS>
				</ns1:ItemDetails>				
				<ns1:NeedPickUp>N</ns1:NeedPickUp>
				<ns1:NeedRoundTrip>N</ns1:NeedRoundTrip>
			</ns2:SHIPINFO>
		</ns2:Shipment_Creation>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>-->

<? //xml version="1.0" encoding="UTF-8"?> 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://schemas.datacontract.org/2004/07/PostaWebClient" xmlns:ns2="http://tempuri.org/"> 
    <SOAP-ENV:Body> 
        <ns2:Shipment_Creation> 
            <ns2:SHIPINFO> 
                <ns1:CashOnDelivery>12132435345</ns1:CashOnDelivery> 
                <ns1:CashOnDeliveryCurrency>CURRENCY_CODE</ns1:CashOnDeliveryCurrency> 
                <ns1:ClientInfo> <ns1:CodeStation>POSTAPLUS_STATION_CODE</ns1:CodeStation> 
                    <ns1:Password>PASSWORD</ns1:Password> 
                    <ns1:ShipperAccount>ACCOUNT_CODE</ns1:ShipperAccount> 
                    <ns1:UserName>ACCOUNT_CODE</ns1:UserName> </ns1:ClientInfo> 
                <ns1:CodeCurrency>CURRENCY_CODE</ns1:CodeCurrency> 
                <ns1:CodeService>SERVICE_TYPE_CODE</ns1:CodeService> 
                <ns1:CodeShippmentType>SHIPMENT_TYPE_CODE</ns1:CodeShippmentType> 
                <ns1:ConnoteContact> <ns1:Email1>ShipperEmail@test.com</ns1:Email1> 
                    <ns1:Email2>ConsigneeEmail@test.com</ns1:Email2> 
                    <ns1:TelHome>3232322344343</ns1:TelHome> 
                    <ns1:TelMobile>3232322344343</ns1:TelMobile> 
                    <ns1:WhatsAppNumber>3232322344343</ns1:WhatsAppNumber> 
                </ns1:ConnoteContact> 
                <ns1:ConnoteDescription>Shipment description</ns1:ConnoteDescription> 
                <ns1:ConnoteInsured>N</ns1:ConnoteInsured> 
                <ns1:ConnoteNotes> 
                    <ns1:Note1>Test notes</ns1:Note1> 
                    <ns1:Note2/> <ns1:Note3/> 
                    <ns1:Note4/>Test notes</ns1:Note4> 
                    <ns1:Note5/> </ns1:ConnoteNotes> 
                <ns1:ConnotePerformaInvoice> 
                    <ns1:CONNOTEPERMINV> 
                        <ns1:CodeHS>Universal HS Code</ns1:CodeHS>
                        <ns1:CodePackageType>PACKAGE_TYPE_CODE</ns1:CodePackageType> 
                        <ns1:Description>Description of the item</ns1:Description> 
                        <ns1:OrginCountry>ISO_COUNTY_CODE</ns1:OrginCountry> 
                        <ns1:Quantity>1</ns1:Quantity> 
                        <ns1:RateUnit>10</ns1:RateUnit> 
                    </ns1:CONNOTEPERMINV> 
                </ns1:ConnotePerformaInvoice> 
                <ns1:ConnotePieces>1</ns1:ConnotePieces> 
                <ns1:ConnoteProhibited>N</ns1:ConnoteProhibited> 
                <ns1:ConnoteRef> 
                    <ns1:Reference1>Shipper reference</ns1:Reference1> 
                    <ns1:Reference2>Consignee reference</ns1:Reference2> 
                </ns1:ConnoteRef> <ns1:Consignee> 
                    <ns1:Company>Consignee Company Name</ns1:Company> 
                    <ns1:FromAddress>123,Test City, Test Province, Test PIN</ns1:FromAddress> 
                    <ns1:FromArea>NA</ns1:FromArea> 
                    <ns1:FromCity>CITY_CODE</ns1:FromCity> 
                    <ns1:FromCodeCountry>ISO_COUNTY_CODE</ns1:FromCodeCountry> 
                    <ns1:FromMobile>00000000</ns1:FromMobile> 
                    <ns1:FromName>From Name</ns1:FromName> 
                    <ns1:FromPinCode>NA</ns1:FromPinCode> 
                    <ns1:FromProvince>PROVINCE_CODE</ns1:FromProvince> 
                    <ns1:FromTelphone>000000</ns1:FromTelphone> 
                    <ns1:Remarks>Test remarks</ns1:Remarks> 
                    <ns1:ToAddress>123,Test City, Test Province, Test PIN</ns1:ToAddress> 
                    <ns1:ToArea>AREA_CODE</ns1:ToArea> 
                    <ns1:ToCity>CITY_CODE</ns1:ToCity> 
                    <ns1:ToCivilID>NA</ns1:ToCivilID> 
                    <ns1:ToCodeCountry>ISO_COUNTRY_CODE</ns1:ToCodeCountry> 
                    <ns1:ToCodeSector>NA</ns1:ToCodeSector> 
                    <ns1:ToDesignation>NA</ns1:ToDesignation> 
                    <ns1:ToMobile>00000000</ns1:ToMobile> 
                    <ns1:ToName>To Name</ns1:ToName> 
                    <ns1:ToPinCode>NA</ns1:ToPinCode> 
                    <ns1:ToProvince>PROVINCE_CODE</ns1:ToProvince> 
                    <ns1:ToTelPhone>00000000</ns1:ToTelPhone> 
                </ns1:Consignee> 
                <ns1:CostShipment>10</ns1:CostShipment> 
                <ns1:ItemDetails> 
                    <!-- ITEMDETAILS element can be repeated more than one --> 
                    <ns1:ITEMDETAILS> 
                        <ns1:ConnoteHeight>1</ns1:ConnoteHeight> 
                        <ns1:ConnoteLength>1</ns1:ConnoteLength> 
                        <ns1:ConnoteWeight>0.5</ns1:ConnoteWeight> 
                        <ns1:ConnoteWidth>1</ns1:ConnoteWidth> 
                        <ns1:ScaleWeight>0</ns1:ScaleWeight> 
                    </ns1:ITEMDETAILS> 
                </ns1:ItemDetails> 
                </ns2:SHIPINFO> 
        </ns2:Shipment_Creation> 
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>

<?php exit; ?>
