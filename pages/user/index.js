import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
                <h2>User Dashboard</h2>

                <a href="https://console.improbable.io/launch/v2/eyJhbGciOiJSUzM4NCIsImtpZCI6IjAwMDEifQ
                    .eyJpYXQiOjE2MjYyNzYzODYsInByb2plY3RfbmFtZSI6ImJldGFfZ2x1Y29zZV9jdXBfMTcyIiwiZGVwbG95b
                    WVudF9uYW1lIjoicGxheWZhYl9sb2dpbl90ZXN0X2RlcGxveW1lbnQiLCJpc3MiOiJodHRwczovL2xvY2F0b3IuaW
                   1wcm9iYWJsZS5pbyIsImF1ZCI6Imh0dHBzOi8vbG9jYXRvci5pbXByb2JhYmxlLmlvIn0.WjR9YI0yxMLiwt4m2hJa
                   kjVX2UtrIP4UMbvzbjLIEZeUcEPxEkLXVSam0kLtN0hkpizc1XJMwhtYNV_Ko2hwzjUdCv5adxJWPset3cuGvaYrq8
                   EqScTGgRgBtOAe-JabxPPq8glkDhsz-DgFLqmD4wTjLV_y9YVM9MqDvn9GrkvNkMpw-U5J7CbdeePFeiD7_Neuluzic
                   RHD2uACIgPZRrc8QcbToMGcmZgVool84p4riH8OKiduAFdd7fqnMaGcuS6jWHwIyh0jlJcx2tKWN9-xMFkPqvxMBHzq-
                   4AYeUgFzT5YaEPcAL5fXBHCAYL8VdJgO-VOnbz8HdkCijGFXA" className="btn btn-dark">Open Story!</a>
            </Private>
        </Layout>
    );
};

export default UserIndex;
