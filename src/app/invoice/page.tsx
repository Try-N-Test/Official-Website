'use client';

import { useState, useEffect } from 'react';
import { 
  PDFDownloadLink, 
  PDFViewer, 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  Image as PDFImage
} from '@react-pdf/renderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { V2 } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { generateUniqueInvoiceNumber } from '@/lib/invoice-utils';
import LogoImage from '@/assets/Logo Full.png';

// Currency data
const currencies = {
  INR: { symbol: "Rs.", code: "INR" },
  USD: { symbol: "$", code: "USD" },
  EUR: { symbol: "€", code: "EUR" },
  GBP: { symbol: "£", code: "GBP" }
};

// Company data
const companyInfo = {
  name: "Try N Test Foundation",
  email: "tnt.tryntest@gmail.com",
  phone1: "+91 6299035580",
  phone2: "+91 9779266223",
  website: "www.tryntest.in",
  logoSrc: LogoImage,
};

// Styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  companyInfo: {
    width: '60%',
  },
  logo: {
    width: 120,
    height: 60,
    objectFit: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2DB7B9',
  },
  invoiceRef: {
    fontSize: 10,
    marginBottom: 10,
    textAlign: 'right',
    color: '#666',
  },
  section: {
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2DB7B9',
    borderBottom: '1 solid #eee',
    paddingBottom: 3,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 3,
  },
  col: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    width: '30%',
  },
  value: {
    width: '70%',
  },
  amountLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    width: '50%',
  },
  amountValue: {
    width: '50%',
    textAlign: 'right',
    paddingRight: 5,
  },
  footer: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 8,
    color: '#666',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  totalSection: {
    marginTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#2DB7B9',
    paddingTop: 5,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'right',
    width: '50%',
  },
  verification: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 8,
    color: '#666',
    padding: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  founder: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 10,
  },
  founderName: {
    fontWeight: 'bold',
  },
  twoColumnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  column: {
    flex: 1,
  },
});

// Define the type for invoice data
interface InvoiceData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  invoiceType: 'advance' | 'final';
  fullAmount: string;
  advancePaid: string;
  paymentDate: string;
  paidTo: string;
  paidVia: string;
  projectTitle: string;
  services: string;
  invoiceReference: string;
  logoDataUrl: string;
  currency: keyof typeof currencies;
}

// PDF Document Component
const InvoicePDF = ({ invoiceData }: { invoiceData: InvoiceData }) => {
  const currency = currencies[invoiceData.currency] || currencies.INR;
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.companyInfo}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2DB7B9' }}>{companyInfo.name}</Text>
            <Text>Email: {companyInfo.email}</Text>
            <Text>Phone: {companyInfo.phone1}</Text>
            <Text>Website: {companyInfo.website}</Text>
          </View>
          <PDFImage style={styles.logo} src={invoiceData.logoDataUrl} />
        </View>
        
        <Text style={styles.title}>
          {invoiceData.invoiceType === 'advance' ? 'Advance Payment Invoice' : 'Final Invoice'}
        </Text>
        
        <Text style={styles.invoiceRef}>
          Invoice #: {invoiceData.invoiceReference}
          {'\n'}
          Date: {invoiceData.paymentDate}
        </Text>
        
        {/* Two column layout for client and project details */}
        <View style={styles.twoColumnLayout}>
          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Client Information</Text>
              <View style={styles.row}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{invoiceData.clientName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{invoiceData.clientEmail}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>{invoiceData.clientPhone}</Text>
              </View>
            </View>
          </View>
        
          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Project Details</Text>
              <View style={styles.row}>
                <Text style={styles.label}>Title:</Text>
                <Text style={styles.value}>{invoiceData.projectTitle}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Services:</Text>
                <Text style={styles.value}>{invoiceData.services}</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Details</Text>
          <View style={styles.twoColumnLayout}>
            <View style={styles.column}>
              <View style={styles.row}>
                <Text style={styles.label}>Paid To:</Text>
                <Text style={styles.value}>{invoiceData.paidTo}</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.row}>
                <Text style={styles.label}>Paid Via:</Text>
                <Text style={styles.value}>{invoiceData.paidVia}</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.totalSection}>
          <View style={styles.row}>
            <Text style={styles.amountLabel}>Full Amount:</Text>
            <Text style={styles.total}>{currency.symbol} {invoiceData.fullAmount}</Text>
          </View>
          
          {invoiceData.invoiceType === 'advance' && (
            <>
              <View style={styles.row}>
                <Text style={styles.amountLabel}>Advance Paid:</Text>
                <Text style={styles.total}>{currency.symbol} {invoiceData.advancePaid}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.amountLabel}>Balance Due:</Text>
                <Text style={styles.total}>{currency.symbol} {Number(invoiceData.fullAmount) - Number(invoiceData.advancePaid)}</Text>
              </View>
            </>
          )}
        </View>
        
        <View style={styles.twoColumnLayout}>
          <View style={styles.verification}>
            <Text>This invoice is electronically generated and is verifiable using the reference: {invoiceData.invoiceReference}</Text>
            <Text>No physical signature is required for the validity of this document.</Text>
          </View>
          
          <View style={styles.founder}>
            <Text style={styles.founderName}>Dipesh Ranjan</Text>
            <Text>Founder & CEO</Text>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text>Thank you for your business!</Text>
          <Text>{companyInfo.name} | {companyInfo.email} | {companyInfo.website}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default function InvoicePage() {
  const [showPreview, setShowPreview] = useState(false);
  const [logoDataUrl, setLogoDataUrl] = useState('');
  const [formData, setFormData] = useState<InvoiceData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    invoiceType: 'advance',
    fullAmount: '',
    advancePaid: '',
    paymentDate: new Date().toISOString().split('T')[0],
    paidTo: '',
    paidVia: '',
    projectTitle: '',
    services: '',
    invoiceReference: generateUniqueInvoiceNumber(),
    logoDataUrl: '',
    currency: 'INR',
  });

  // Convert the logo to a data URL for the PDF renderer
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        setLogoDataUrl(dataUrl);
        setFormData(prev => ({...prev, logoDataUrl: dataUrl}));
      }
    };
    img.src = LogoImage.src;
  }, []);

  const handleChange = <T extends keyof InvoiceData>(field: T, value: InvoiceData[T]): void => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setShowPreview(true);
  };

  const getCurrencySymbol = (currencyCode: keyof typeof currencies): string => {
    return currencies[currencyCode]?.symbol || currencies.INR.symbol;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-background">
      <h1 className={cn("text-4xl font-bold mb-8 text-center text-white", V2.className)}>
        Invoice <span className="text-primary-400">Generator</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-primary-950/30 border-primary-400/20 text-white">
          <CardHeader>
            <CardTitle className={cn("text-2xl text-primary-400", V2.className)}>Invoice Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-primary-300 mb-3">Client Information</h3>
                <Separator className="bg-primary-400/30 mb-4" />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={formData.clientName}
                      onChange={(e) => handleChange('clientName', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="clientEmail">Client Email</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => handleChange('clientEmail', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="clientPhone">Client Phone</Label>
                    <Input
                      id="clientPhone"
                      type="tel"
                      value={formData.clientPhone}
                      onChange={(e) => handleChange('clientPhone', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-primary-300 mb-3">Project Details</h3>
                <Separator className="bg-primary-400/30 mb-4" />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="projectTitle">Project Title</Label>
                    <Input
                      id="projectTitle"
                      value={formData.projectTitle}
                      onChange={(e) => handleChange('projectTitle', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="services">Services Used</Label>
                    <Textarea
                      id="services"
                      value={formData.services}
                      onChange={(e) => handleChange('services', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white min-h-[100px]"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-primary-300 mb-3">Invoice Details</h3>
                <Separator className="bg-primary-400/30 mb-4" />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="invoiceType">Invoice Type</Label>
                    <Select 
                      value={formData.invoiceType}
                      onValueChange={(value) => handleChange('invoiceType', value as 'advance' | 'final')}
                    >
                      <SelectTrigger className="bg-primary-950/50 border-primary-400/30 text-white">
                        <SelectValue placeholder="Select invoice type" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-900 text-white border-primary-400/30">
                        <SelectItem value="advance">Advance Payment</SelectItem>
                        <SelectItem value="final">Final Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select 
                      value={formData.currency}
                      onValueChange={(value) => handleChange('currency', value as keyof typeof currencies)}
                    >
                      <SelectTrigger className="bg-primary-950/50 border-primary-400/30 text-white">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-900 text-white border-primary-400/30">
                        <SelectItem value="INR">Indian Rupee (Rs.)</SelectItem>
                        <SelectItem value="USD">US Dollar ($)</SelectItem>
                        <SelectItem value="EUR">Euro (€)</SelectItem>
                        <SelectItem value="GBP">British Pound (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="fullAmount">Full Amount ({getCurrencySymbol(formData.currency)})</Label>
                    <Input
                      id="fullAmount"
                      type="number"
                      value={formData.fullAmount}
                      onChange={(e) => handleChange('fullAmount', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                    />
                  </div>
                  
                  {formData.invoiceType === 'advance' && (
                    <div className="grid gap-2">
                      <Label htmlFor="advancePaid">Advance Paid ({getCurrencySymbol(formData.currency)})</Label>
                      <Input
                        id="advancePaid"
                        type="number"
                        value={formData.advancePaid}
                        onChange={(e) => handleChange('advancePaid', e.target.value)}
                        className="bg-primary-950/50 border-primary-400/30 text-white"
                        required={formData.invoiceType === 'advance'}
                      />
                    </div>
                  )}

                  <div className="grid gap-2">
                    <Label htmlFor="invoiceReference">Invoice Reference</Label>
                    <Input
                      id="invoiceReference"
                      value={formData.invoiceReference}
                      onChange={(e) => handleChange('invoiceReference', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                      readOnly
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-primary-300 mb-3">Payment Information</h3>
                <Separator className="bg-primary-400/30 mb-4" />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="paymentDate">Payment Date</Label>
                    <Input
                      id="paymentDate"
                      type="date"
                      value={formData.paymentDate}
                      onChange={(e) => handleChange('paymentDate', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="paidTo">Paid To</Label>
                    <Input
                      id="paidTo"
                      value={formData.paidTo}
                      onChange={(e) => handleChange('paidTo', e.target.value)}
                      className="bg-primary-950/50 border-primary-400/30 text-white"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="paidVia">Paid Via</Label>
                    <Select 
                      value={formData.paidVia}
                      onValueChange={(value) => handleChange('paidVia', value)}
                    >
                      <SelectTrigger className="bg-primary-950/50 border-primary-400/30 text-white">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-900 text-white border-primary-400/30">
                        <SelectItem value="Cash">Cash</SelectItem>
                        <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                        <SelectItem value="UPI">UPI</SelectItem>
                        <SelectItem value="Credit Card">Credit Card</SelectItem>
                        <SelectItem value="Debit Card">Debit Card</SelectItem>
                        <SelectItem value="Check">Check</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-primary-950"
                >
                  Generate Invoice
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div>
          {showPreview ? (
            <Card className="bg-primary-950/30 border-primary-400/20 text-white">
              <CardHeader>
                <CardTitle className={cn("text-2xl text-primary-400", V2.className)}>Invoice Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border border-primary-400/30 rounded-lg h-[600px]">
                  <PDFViewer width="100%" height="100%" className="rounded">
                    <InvoicePDF invoiceData={formData} />
                  </PDFViewer>
                </div>
                <div className="mt-4">
                  <PDFDownloadLink 
                    document={<InvoicePDF invoiceData={formData} />} 
                    fileName={`TNT-Invoice-${formData.invoiceReference}-${formData.paymentDate}.pdf`}
                    className="w-full block text-center"
                  >
                    {({ blob, url, loading, error }) => 
                      <Button className="w-full bg-primary-600 hover:bg-primary-700 text-primary-950">
                        {loading ? 'Preparing document...' : 'Download Invoice'
                        }
                      </Button>
                    }
                  </PDFDownloadLink>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-primary-950/30 border-primary-400/20 text-white h-full flex items-center justify-center">
              <CardContent className="text-center pt-6">
                <p className="text-primary-300 text-xl">Fill out the form to generate an invoice</p>
                <p className="text-primary-400/60 mt-2">A preview will appear here</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
