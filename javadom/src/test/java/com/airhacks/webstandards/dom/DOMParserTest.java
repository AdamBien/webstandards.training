/*
 */
package com.airhacks.webstandards.dom;

import java.io.IOException;
import java.io.InputStream;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import static org.junit.Assert.assertNotNull;
import org.junit.Before;
import org.junit.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class DOMParserTest {

    private DocumentBuilderFactory documentBuilderFactory;
    private DocumentBuilder documentBuilder;
    private Document document;

    @Before
    public void init() throws ParserConfigurationException, SAXException, IOException {
        this.documentBuilderFactory = DocumentBuilderFactory.newInstance();
        this.documentBuilder = this.documentBuilderFactory.newDocumentBuilder();;
        InputStream stream = this.getClass().getResourceAsStream("/index.html");
        this.document = this.documentBuilder.parse(stream);

    }

    @Test
    public void document() {
        NodeList divs = this.document.getElementsByTagName("div");
        assertNotNull(divs);
        System.out.println("divs = " + divs);
        Node div = divs.item(0);
        assertNotNull(div);
        System.out.println("div = " + div);
        NodeList childNodes = div.getChildNodes();
        Node textNote = childNodes.item(0);
        System.out.println("textNote = " + textNote.getTextContent());
    }

}
